import React from 'react';
import CarouselFront from './CarouselFront';
import Who from './Who';
import Why from './Why';
import How from './How';


const Home =()=>{
    return(
        <div>
            <CarouselFront />
            <h1><span className='SpanTitle'>Comme Tata</span>, un traiteur engagé</h1>
            <Who />
            <Why />
            <How />
        </div>
    )
}
export default Home ;
