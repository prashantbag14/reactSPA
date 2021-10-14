export const allcart=(product)=>{
    return {
        type:"CART_DATA",//required
        payload:product//optional
    };
};

export const cartproduct=(product)=>{
    return {
        type:"CART_ITEM",
        payload:product
    };
};