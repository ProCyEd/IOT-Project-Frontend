describe('Dashboard', () => {
    it('click all links', () => {

        cy.visit('/dashboard')

        cy.contains('Devices').click()    
        
    })
  })