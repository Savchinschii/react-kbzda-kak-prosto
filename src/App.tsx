import React from 'react';

import './App.css';
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {Rating} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";

function App() {
    console.log('App rendering')
    return (
        <div className={'App'}>
            <OnOff/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <UncontrolledAccordion titleValue={'Menu'} />
            <Rating value={3}/>
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
