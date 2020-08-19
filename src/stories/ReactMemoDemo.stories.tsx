import React, { useState } from 'react';

export default {
    title: 'React Memo Demo'

};

type UserPropsType = {
    users: Array<string>
}

type CounterType = {
    counter: number
}
const UsersSecret = (props: UserPropsType) => {
    console.log('USers');
    
    return (
        <div>
            {
                props.users.map((item, index) => <div key={index}>{item}</div>)
            }
        </div>
    )
}

const Users = React.memo(UsersSecret)

const NewMessageCounter = (props: CounterType) => {
    return (
        <div>{props.counter}</div>
    )
}

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Valera', 'Katya'])

    const onclickAddUserHandler = () => {
        setUsers([...users, 'Sveta ' + new Date()]);
    }

    return (
        <div>
            <button onClick={() => { setCounter(counter+1) }}>+</button>
            <button onClick={onclickAddUserHandler}>add user</button>
            <NewMessageCounter counter={counter} />
            <Users users={users}/>
        </div>
    )
}