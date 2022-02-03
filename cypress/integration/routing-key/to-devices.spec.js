describe('Dashboard to devices', () => {
    it('click all links', () => {

        cy.visit('/dashboard')

        cy.contains('Devices').click()    
        
    })
  })