const initialstate={
    cart:[]
}

export const itemtreducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'CART_ITEM':
              return{...state,cart:action.payload}
        default:
            return state;      
    }
}