import React from 'react';
import {Select} from "./Select";

export const CitySelect = () => {
    const values = ['Moscow', 'Kiev', 'Minsk'];


    return <Select values={values} />
}