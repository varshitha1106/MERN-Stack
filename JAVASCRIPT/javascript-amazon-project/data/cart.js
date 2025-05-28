export const cart=[];  //this variable can be used outside of a file(export)


export function addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem)=>{
    if(productId===cartItem.productName){
      matchingItem=cartItem;

    }

  });
  if(matchingItem){
    matchingItem.quantity++;
  }else{
    cart.push({
    productId:productId,
    quantity:1
    });
    
  }

}