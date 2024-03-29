import { Fragment, useState } from "react";

export default function CounterTwo() {
    const [number, setNumber] = useState(0)
    return (
        <Fragment>
            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(number + 5)
                setNumber(n => n + 1)
            }} className="bg-indigo-500 px-3 rounded-md text-white" >
                Increase the number
            </button>
        </Fragment>
    )
}