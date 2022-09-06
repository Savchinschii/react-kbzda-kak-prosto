import React from 'react';

import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";

function App() {
    console.log('App rendering')
    return (
        <div>
            <OnOff/>
            {/*<Accordion titleValue={'Menu'}  collapsed={true} />*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
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
