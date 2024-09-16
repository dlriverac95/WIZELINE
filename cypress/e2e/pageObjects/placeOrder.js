class PlaceOrder{
    
    static clickToPlaceOrder(){
        cy.get('button[class="btn btn-success"]').click()
    }

    static enterPlaceOrderData(name, country, city, creditCard, month, year){
        cy.get('input[id="name"]').type(name)
        cy.get('input[id="country"]').type(country)
        cy.get('input[id="city"]').type(city)
        cy.get('input[id="card"]').type(creditCard)
        cy.get('input[id="month"]').type(month)
        cy.get('input[id="year"]').type(year)
        cy.get('button[class="btn btn-primary"]').contains("Purchase").click()
    }

    static confirmOrder(){
        cy.get('button[class="confirm btn btn-lg btn-primary"]').contains("OK").click()
    }

    static placeOrder(name, country, city, creditCard, month, year){
        PlaceOrder.clickToPlaceOrder()
        PlaceOrder.enterPlaceOrderData(name, country, city, creditCard, month, year)
        PlaceOrder.confirmOrder()
    }
}

export default PlaceOrder