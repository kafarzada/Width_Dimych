import React, { useState } from 'react';
import {Select} from "./Select";
import { action } from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select,
};



const callback = action("clicked")

export const CollapsedSelect = () => {
    const values = ['none','Moscow', 'Kiev', 'Minsk'];
    const [collapsed, setCollapsed] = useState<boolean>(true)
    let [value, setValue] = useState('')

    return <Select  listValues={values}
                    value={value}
                    onChange={setValue}
                    collapsed={collapsed}
                    setColappsed={callback}/>
}


export const UncollapsedSelect = () => {
    const values = ['none','Moscow', 'Kiev', 'Minsk'];
    const [collapsed, setCollapsed] = useState<boolean>(false)
    let [value, setValue] = useState('')

    return <Select  listValues={values}
                    value={value}
                    onChange={setValue}
                    collapsed={collapsed}
                    setColappsed={callback}/>
}

export const DifferentModeSelect = () => {
    const values = ['none','Moscow', 'Kiev', 'Minsk'];
    const [collapsed, setCollapsed] = useState<boolean>(true)
    let [value, setValue] = useState('')

    return <Select  listValues={values}
                    value={value}
                    onChange={setValue}
                    collapsed={collapsed}
                    setColappsed={setCollapsed}/>
}