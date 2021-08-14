
import {useState} from 'react'

const Button = () => {
    const [count, setCount] = useState(0);
    return (
        <div key='12'>
        <p key='8'>{count}</p>
        <button id='counter' onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Button