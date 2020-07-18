import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props:AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={setCollapsed} collapsed={collapsed}/>
            { !collapsed && <AccordionBody/> } {/* УСЛОВНЫЙ РЕНДЕРИНГ */}
        </div>
    )
}



type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={() => {props.onClick(!props.collapsed)}}>{props.title}</h3>
    )
}

  
function AccordionBody() {
    console.log("AccordionBody rendering");
    
    return (
      <ul> 
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
}

export default UncontrolledAccordion

