import React,{useEffect} from 'react';
import axios from 'axios';
import Displaycart from './displayCart';
import { useDispatch,useSelector } from 'react-redux';
import { allcart } from '../actions';

const Myblogs=()=>{

    const cart=useSelector(state=>state);
    const dispatch=useDispatch();


    const fetchblogs=async ()=>{
            const response=await axios.get('https://fakestoreapi.com/carts')
            .catch((err)=>{
                console.log("err",err);
            });

            dispatch(allcart(response.data));
            
    }

    useEffect(() => {
            fetchblogs()
    }, [])


    console.log(cart)
        return(
            <div>
            <h6>All Status</h6>
            <Displaycart/>

            </div>
        )
}


export default Myblogs;