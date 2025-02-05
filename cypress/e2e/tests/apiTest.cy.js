describe('API Automation Using GoRest API', () => {
    let randomNumber =Math.floor(Math.random() * 1000);
    let userId;
    it('POST API Automation Using GoRest API', () => {
      const user = {
        name: 'John Doe',
        email: "johndoe123"+randomNumber+"@example.com",
        gender: 'male',
        status: 'active',
      };
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v1/users',
        headers: {
          Authorization: 'Bearer 84bb7773414ee1a1247f6830428a2ab051d763d7cb24c97583f10ca96a59ddde',
        },
        body: user,
      }).then((response) => {
        userId=response.body.data.id
        expect(response.status).to.equal(201);
        expect(response.body.data.name).to.equal(user.name);
        expect(response.body.data.email).to.equal(user.email);
      });
    })
  });