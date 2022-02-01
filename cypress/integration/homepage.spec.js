describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL

      cy.get('input[name=email]').type('corsonca23@mail.vmi.edu')
      cy.get('input[name=password]').type(`admin{enter}`)

      cy.url().should('include', '/home')

      cy.getCookie('token').should('exist')
    })
  })