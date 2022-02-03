describe('Welcome Page', () => {
    it('click all links', () => {

        cy.visit('/home')

        cy.contains('IOT Contoller').click() 
        
        cy.url().should('include', '/dashboard')
        
    })
  })