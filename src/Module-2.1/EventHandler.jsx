import { Fragment } from "react";

export default function EventHandler() {
    function handleClick() {
        console.log("Clicked")
    }
    return (
        <Fragment>
            <button onClick={handleClick} className="bg-purple-500 text-white p-1 rounded-md m-4 text-sm" >
                Click Here
            </button>
        </Fragment>
    )
}