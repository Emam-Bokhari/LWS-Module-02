import { Fragment } from "react";

export default function PreventDefault() {
    function handleSubmit(event) {
        event.preventDefault()
        console.log("Hello World!")
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input className="border-2 border-black ml-4 mt-5" type="text" />
                <button className="bg-purple-500 p-1 text-white ml-2 rounded-md" >
                    Click Here
                </button>
            </form>
        </Fragment>
    )
}