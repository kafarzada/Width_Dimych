import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import UncontrolledOnOff from './UncontrolledOnOff';

export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
};

const callback = action('')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false}  onChange={callback} />
export const BugMode = () =>  <div>UnCync when change defalt value when already rendered</div>