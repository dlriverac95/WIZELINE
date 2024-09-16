import Index from "./pageObjects/index";
import LogIn from "./pageObjects/logIn";
import CreateCar from "./pageObjects/createCar";
import PlaceOrder from "./pageObjects/placeOrder";

describe('E2E Tests', () => {
    beforeEach(() => {
        Index.visit();
    });
    
    it('Try to login with wrong data', () => {
        LogIn.login("C0sme", "12433")

        //Assert
        cy.get('a[id="nameofuser"]').should('not.contain', 'Welcome C0sme')
    })

    it('Try to login with correct data', () => {
        LogIn.login("C0sme", "123")

        //Assert
        cy.get('a[id="nameofuser"]').should('contain', 'Welcome C0sme')
    })

    it('Create a car', () =>{
        LogIn.login("C0sme", "123")
        CreateCar.createCar() 
        
        //Assert
        cy.get('tbody[id="tbodyid"]').should('be.not.empty')
    })
    
    it('Place order', () =>{
        LogIn.login("C0sme", "123")
        CreateCar.createCar() 
        PlaceOrder.placeOrder("DAVID", "CO", "BOGOTA", 5465465, 11, 2027)

        //Assert
        cy.get('p[class="lead text-muted "]').should('contain', 'DAVID')
        .and('contain', 5465465)
    })
}) 