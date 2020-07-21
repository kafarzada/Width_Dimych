import React from 'react';
import s from './Select.module.css'

type SelectPropsType = {
    values: Array<string>
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>

            <div className={s.Select__block}>
                <input className={s.inputSelect} type="text" value={''} />
                <div className={s.arrow}><span className={s.arrowDown}></span></div>
            </div>

            <div className={s.listItems}>
                {
                    props.values.map((item, index) => {
                        return <Option value={item} />
                    })
                }
            </div>

        </div>
    )
}

type OptionPropsType = {
    value: string
}
const Option = (props: OptionPropsType) => {
    return <div className={s.select__item}>{ props.value}</div>
}

