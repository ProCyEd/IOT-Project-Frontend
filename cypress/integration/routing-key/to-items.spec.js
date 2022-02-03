describe('Devices to Item Three',()=>{
    it('click all links',()=>{

        cy.visit('/devices')

        cy.contains('Catagory One').click()
        cy.wait(2000)

        cy.contains('Lightbulb').click({force:true})
        cy.wait(2000)

        cy.contains('Item Three').click({force: true})

        cy.url().should('include','/devices')
        
    })
})