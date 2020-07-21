import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { OnOff } from './OnOff';

export default {
  title: 'OnOff',
  component: OnOff,
};

export const OnMode = () => <OnOff on={true} onChange={action('clicked')}/>;

export const OffMode = () => <OnOff on={false} onChange={action('clicked')}/>;

export const ModeChanging = () => {
  const [value, setValue] = useState(true);
  return <OnOff on={value} onChange={setValue}/>
}

