import { itemtreducer } from "./itemReducer";
import { cartreducer } from "./cartReducer";
import {combineReducers} from 'redux';


export const allReducers=combineReducers({
    cartdata:cartreducer,
    cartitem:itemtreducer

});