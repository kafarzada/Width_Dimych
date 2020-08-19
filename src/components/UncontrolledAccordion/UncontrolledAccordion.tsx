import React, {useState, useReducer} from 'react';
import { TOGGLE_COLLAPSED, reducer } from './reducer';

type AccordionPropsType = {
    titleValue: string
}


function UncontrolledAccordionSecret(props:AccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            {/* <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/> */}

            <AccordionTitle title={props.titleValue}
                            onClick={() => { dispatch({type: TOGGLE_COLLAPSED}) }}
                            collapsed={state.collapsed}/> 

            { !state.collapsed && <AccordionBody/> } {/* УСЛОВНЫЙ РЕНДЕРИНГ */}
        </div>
    )
}

const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)


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

