describe('Welcome Page', () => {
    it('click all links', () => {

        cy.visit('/home')

        cy.contains('IOT Contoller').click()    
        
    })
  })