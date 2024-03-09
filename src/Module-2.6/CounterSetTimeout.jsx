import { Fragment, useState } from "react";

export default function CounterSetTimeout() {
    const [number, setNumber] = useState(0)
    return (
        <Fragment>
            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(number + 5)
                setTimeout(function () {
                    alert(number)
                }, 3000)
            }} className="bg-indigo-500 px-3 rounded-md text-white" >
                +5
            </button>
        </Fragment>
    )
}