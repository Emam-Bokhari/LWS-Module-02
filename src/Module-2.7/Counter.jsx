import { Fragment, useState } from "react";

export default function Counter() {
    const [number, setNumber] = useState(0)
    return (
        <Fragment>
            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(n => n + 1)
                setNumber(n => n + 1)
                setNumber(n => n + 1)

            }} className="bg-indigo-500 px-3 rounded-md text-white" >
                +3
            </button>
        </Fragment>
    )
}