import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";


function App() {
    console.log('App rendering')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(5)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledAccordion titleValue={'Menu'} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating onChange={value => 1}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <Accordion titleValue={'Users'}
                       collapsed={accordionCollapsed}
                       onChange={() =>{setAccordionCollapsed(!accordionCollapsed)} }/>
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
