import React from 'react'
import {useSelector} from 'react-redux';

const Shopping=()=>{
    const t = useSelector(state=> state.cardReducer.Shopp);
    
    
    const total =(t)=>{
        let sum =0;
        console.log(t[0].price)   
    for(let i=0;i< t.length;i++){
         sum=sum+t[i].price;
    }
    return sum
    
}
 
    return(
        <div>
            {t.map(el=> <div> <h3>{el.name}   {el.price}.DT</h3> </div> )}
            <h4>total = {total(t)} .DT</h4>
        </div>
    )
}
export default Shopping