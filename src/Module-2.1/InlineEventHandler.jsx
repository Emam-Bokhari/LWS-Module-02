import { Fragment } from "react";

export default function InlineEventHandler() {
    return (
        <Fragment>
            <button onClick={function () {
                console.log("Clicked!")
            }} className="bg-purple-500 p-1 text-sm rounded-md text-white m-4" >
                Click Here
            </button>
        </Fragment>
    )
}