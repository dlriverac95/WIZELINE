class Index{
    
    static visit(){
       cy.visit("https://www.demoblaze.com/index.html")
       cy.wait(2000)
    }}

export default Index