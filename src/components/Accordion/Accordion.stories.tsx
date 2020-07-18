import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};
const callBack = action("accordion Mode change event fired")
const onCLickCallback = action("some item was clicked")


export const MenuColapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callBack} items={[]} onClick={onCLickCallback}/>;
export const UsersUncolapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callBack} items={[
                                                                        {title:"Dimych", value:1},
                                                                        {title:"Valera", value:2},
                                                                        {title:"Victor", value:3}]} onClick={onCLickCallback}/>;

export const UnCollapsed = () => {
  let [value, setValue] = useState(true)
  
  return  <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} items={[
                                                                        {title:"Dimych", value:1},
                                                                        {title:"Valera", value:2},
                                                                        {title:"Victor", value:3}]}
                                                                         onClick={(id) => { alert(`user width id ${id} should be happy`)}}/>
}