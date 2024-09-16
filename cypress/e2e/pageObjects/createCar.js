class CreateCar{
    
    static selectItem(){
        cy.get('div[class="col-lg-4 col-md-6 mb-4"]')
          .find('a[class="hrefch"]')
          .then(($elements) => {
            const count = $elements.length;
            const randomIndex = Math.floor(Math.random() * count);
            cy.wrap($elements[randomIndex]).click();
        });
    }

    static addToCart(){
        cy.get('a[class="btn btn-success btn-lg"]').click()
        cy.get('a[id="cartur"]').click()
    }

    static createCar(){
        CreateCar.selectItem()
        CreateCar.addToCart()
    }
}

export default CreateCar