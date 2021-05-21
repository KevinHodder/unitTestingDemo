# Shopping Cart Total feature

As a customer
I want to know how much my chosen goods will cost
So that I know how much I will need to pay

_Acceptance Criteria_

* GIVEN a list of items with prices  
  THEN Return the total value
  

* GIVEN a list of items with quantities and prices  
  THEN Return the total value
  

* GIVEN a list of items with quantities and prices  
  AND a shipping item  
  WHEN item total < 100  
  THEN return item total + shipping
  

* GIVEN a list of items with quantities and prices  
  AND a shipping item  
  WHEN item total >= 100  
  THEN return item total, but not shipping


* GIVEN a list of items with quantities and prices and a 'digital' flag   
  AND a shipping item  
  WHEN non-digital item total < 100  
  THEN return item total + shipping


* GIVEN a list of items with quantities and prices and a 'digital' flag   
  AND a shipping item  
  WHEN non-digital item total >= 100  
  THEN return item total + shipping
  
