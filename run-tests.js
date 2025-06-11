const { exec } = require('child_process');
const path = require('path');

exec('npx cypress run', (err, stdout, stderr) => {
  if (err) return console.error(`Cypress failed: ${stderr}`);

  exec('npx mochawesome-merge cypress/reports/*.json > cypress/reports/merged.json', (mergeErr) => {
    if (mergeErr) return console.error('Merge failed:', mergeErr);

    exec('npx marge cypress/reports/merged.json -f mochawesome -o cypress/reports', (margeErr) => {
      if (margeErr) return console.error('Report generation failed:', margeErr);

      console.log('Report generated. Sending email...');
      require('./send-report');
    });
  });
});
