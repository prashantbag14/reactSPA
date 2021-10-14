const initialstate={
    cart:[]
}

export const cartreducer=(state=initialstate,action)=>{
      switch(action.type){
          case 'CART_DATA':
                return{...state,cart:action.payload}
          default:
              return state;      
      }
}