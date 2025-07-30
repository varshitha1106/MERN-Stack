import {renderOrderSummary} from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadProducts,loadProductsFetch} from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
async function loadPage(){

  await loadProductsFetch();
  const value=await new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();




/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
]).then((values)=>{
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

*/
/*
new Promise((resolve)=>{     //promise
  loadProducts(()=>{          //promise does the same thing the callback does
    resolve('value1');
  });

}).then((value)=>{
  console.log(value);
  return new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      });
  });

}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});

*/
/*
loadProducts(()=>{                            //callback
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();

  });          
  
});
*/
