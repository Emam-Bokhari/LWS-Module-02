import { Fragment } from "react";

export default function ArrowFunctionHandler() {
    return (
        <Fragment>
            <button onClick={() => {
                console.log("Clicked!")
            }} className="bg-purple-500 text-white text-sm rounded-md p-1 m-4" >
                Click Here
            </button>
        </Fragment>
    )
}