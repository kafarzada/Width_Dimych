import React from 'react';
import s from './Select.module.css'

type SelectPropsType = {
    listValues: Array<string>
    value: string
    onChange: (value: string) => void
    collapsed: boolean
    setColappsed: (value: boolean) => void
}

const SelectSecret = (props: SelectPropsType) => {

    const listStyle = {
        display: props.collapsed ? "none": 'block'
    }

    const onClickCollapsedHander = () =>{
        props.setColappsed(!props.collapsed)
    }

    const renderedOptions = props.listValues.map((item, index) => {
        const onClickHander = () => {props.onChange(item)}
        return <Option key={index} value={item} onClick={onClickHander} onChange={props.setColappsed}/>
    })
    return (
        <div className={s.select}>

            <div className={s.Select__block}>
                <input className={s.inputSelect} type="text" readOnly value={props.value} />
                <div className={s.arrow} onClick={onClickCollapsedHander}><span className={s.arrowDown}></span></div>
            </div>
            <div className={s.listItems} style={listStyle}>
                {renderedOptions}
            </div>

        </div>
    )
}

export const Select = React.memo(SelectSecret)

type OptionPropsType = {
    value: string
    onClick: () => void
    onChange: (value: boolean) => void
}
const Option = (props: OptionPropsType) => {
    return <div className={s.select__item} onClick={() => { props.onClick(); props.onChange(true)}}>{ props.value}</div>
}

