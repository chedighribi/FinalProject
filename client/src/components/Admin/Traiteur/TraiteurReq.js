import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTraiteur } from "../../../redux/actions/traiteurAction";
import TraiteurCom from "./TraiteurCom";

const TraiteurReq = () => {
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getTraiteur());
    }, []);
    const Treq = useSelector((state) => state.traiteurReducer.request.Request);

  return (
    <div className='listTraiteur'>
        {Treq && Treq.map(el=> <TraiteurCom el={el} />)}
    </div>
  );
};
export default TraiteurReq;
