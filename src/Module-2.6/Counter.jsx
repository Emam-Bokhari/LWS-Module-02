import { Fragment, useState } from "react";

export default function Counter() {
    const [number, setNumber] = useState(0)
    return (
        <Fragment>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1)
                setNumber(number + 1)
                setNumber(number + 1)
            }} className="bg-purple-500 px-3 rounded-sm text-white">
                +3
            </button>
        </Fragment>
    )
}