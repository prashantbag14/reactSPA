import React from "react";
import {useSelector} from 'react-redux'

const Displaycart=()=>{  
    

        const carts= useSelector(state =>state.cartdata.cart);
        const renderList=carts.map(item=>{
            const {id,userId,date,products}=item;
            
        return(
            <div className="container">
            {console.log(carts)}
            <table className="table table-striped table-bordered usertable rounded">

            <thead className="h6 bg-success text-dark">
              <tr>
                 <td>USER ID</td>
                <td>DATE</td>
                <td>PRODUCTS</td>
               
          
            </tr>
             </thead>
          
             <tbody className="bg-warning">
               
                    <tr key={id}>
                         <td children={userId} />
                    
                         <td children={date} />
                        <td>
                            <table className="table table-striped table-bordered usertable rounded">
                                <thead className="h6 bg-dark text-white">
                                    <tr>
                                        <td>ProductID</td>
                                        <td>Quality</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {products.map(metadata=><tr>
                                                            <td className="bg-success">{metadata.productId}</td>
                                                             <td className="bg-danger">{metadata.quantity}</td>
                                    </tr>
                                    )
                                    } 
                                </tbody>
                            </table>
                        </td>
                     
                     </tr>
            
                 </tbody>
        </table>
            </div>
        )
        })          
       
 

        return<>{renderList}</>

    

        
 
}

export default Displaycart;