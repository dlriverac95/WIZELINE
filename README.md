***E2E Testing Project***

This project uses Cypress to perform end-to-end (E2E) automated tests on a web page, implementing the Page Object Model (POM) design pattern. This design pattern promotes code reuse, improving maintainability and scalability of the tests. The main automation flow includes logging into the website, adding products to the cart, and placing an order.

**Automated Features**

- Login with incorrect data: Verifies that the user cannot log in with incorrect credentials and that the welcome message does not appear.

- Login with correct data: Validates that the user can log in correctly and that the welcome message appears.

- Add a product to the cart: Once the user is authenticated, a random product from the store is selected and added to the cart. It ensures that the cart is not empty.

- Place an order: After adding a product to the cart, the order details are completed (name, country, city, credit card, expiration month, and year), and the purchase is made. It verifies that the order summary contains the correct information.

**Project Structure**

The project follows a Page Objects structure, where each page functionality is encapsulated in a separate class. This allows for a clear separation of responsibilities and makes the code more maintainable.

**Page Objects**
- Index: Manages the visit to the main page.
- LogIn: Handles the login flow.
- CreateCar: Selects a random product and adds it to the cart.
- PlaceOrder: Manages the process of completing the order.

***Test Execution Report***

After running the tests, an HTML report is generated. You can find it at the following path:
cypress/reports/html/index.html

*Requirements*
- Cypress: Testing automation framework.
- Node.js: To manage dependencies and run the tests.


*Install dependencies:*

npm install

*Run the tests:*

npx cypress open



