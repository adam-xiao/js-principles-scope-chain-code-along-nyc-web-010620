var customerName = "bob";
const leastFavoriteCustomer = "adam";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = "not bob";
}

function overWriteBestCustomer(customer){
  bestCustomer = customer;
}

function changeLeastFavoriteCustomer(customer){
  leastFavoriteCustomer = customer;
}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar'
    let favoriteCustomer = 'not bar'
}