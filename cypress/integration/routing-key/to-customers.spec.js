describe('Dashboard to customers',()=>{
    it('click all links',()=>{
        cy.visit('/dashboard')
        
        cy.contains('Customers').click()

        cy.url().should('include', '/forms')

    })
})