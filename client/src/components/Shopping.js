import React from 'react'
import {useSelector} from 'react-redux';

const Shopping=()=>{
    const t = useSelector(state=> state.cardReducer.Shopp);
    
    
    const total =(t)=>{
        let sum =0;
    for(let i=0;i< t.length;i++){
         sum=sum+t[i].price*t[i].num;
    }
    return sum
    
}
 
    return(
        <div>
            {t.map(el=> <div> <h3>{el.name}  =  {el.num}  X  {el.price}dt  = {el.price*el.num}.DT</h3> </div> )}
            <h4>total = {total(t)} .DT</h4>
        </div>
    )
}
export default Shopping