import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./Components/Rating/Rating";


function App() {
    console.log('App rendering')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(5)
    return (
        <div className={'App'}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
        </div>
    );
}
type PageTitlePropsType = {
    title:string
}

function PageTitle(props:PageTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

export default App;
