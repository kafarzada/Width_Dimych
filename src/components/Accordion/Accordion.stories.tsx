import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const MenuColapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={action("accordion Mode change event fired")}/>;
export const UsersUncolapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={action("accordion Mode change event fired")}/>;
export const UnCollapsed = () => {
  let [value, setValue] = useState(true)
  return  <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
}