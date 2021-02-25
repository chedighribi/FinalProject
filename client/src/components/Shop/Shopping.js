import React from 'react'
import {useSelector} from 'react-redux';
import Tab from './Tab'
import {useState} from 'react'
import {addlunch} from '../../redux/actions/luchAction'
import {useDispatch} from 'react-redux'
import {RESET} from '../../redux/actions/shopAction'
import { Table } from 'reactstrap';



const Shopping=()=>{
    const  user = { 'name': localStorage.getItem('name'),
                    'phone' : localStorage.getItem('phone')}
    const t = useSelector(state=> state.cardReducer.Shopp);
    const [special, setSpecial] = useState('');
    console.log(user)
    const total =(t)=>{
        let sum =0;
    for(let i=0;i< t.length;i++){
         sum=sum+t[i].price*t[i].num;
    }
    return sum }
    const dispatch = useDispatch()
    const add=()=>{
        dispatch(addlunch({order:t,name:user.name, phone:user.phone ,totalPrice:total(t), special}));
        setSpecial('');
        dispatch(RESET())
    }
 
    return(
        <div style={{alignContent:'center'}}>
            {t.map(el=> <Tab el={el} /> )}
            <Table style={{ backgroundColor: "#f9e4b7" }}>
      <thead>
        <tr>
          <th>Total {total(t)} .DT</th>
        </tr>
      </thead>
      
    </Table>

            <input type='text' placeholder='spécial ?' onChange={(e)=>setSpecial(e.target.value)} value={special} />
            <button onClick={add}>Submit</button>
        </div>
    )
}
export default Shopping

//<div> <h3>{el.name}  =  {el.num}  X  {el.price}dt  = {el.price*el.num}.DT</h3> </div>