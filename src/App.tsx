import React, { useState } from 'react';
import './App.css';
import Rating, { RatingvalueType } from "./components/Rating/Rating"




function App() {

  let [raitingValue, setRaitingValue] = useState<RatingvalueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setswitchOn] = useState(false) //  hook 
  return (
    <div className="App">

    </div>
  );
}




type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
   return <h1>{props.title}</h1>
}

export default App;