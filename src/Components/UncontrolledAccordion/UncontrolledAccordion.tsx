import {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>
        { !collapsed && <AccordionBody/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}

export function AccordionTitle(props:AccordionTitlePropsType) {
    return <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>

}

function AccordionBody() {
    return  <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
