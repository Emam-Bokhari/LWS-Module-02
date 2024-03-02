import { Fragment } from "react";

function AlertButton({message,children}) {
    return (
        <Fragment>
            <button onClick={()=>{
                alert(message)
            }} className="bg-purple-500 text-white text-sm rounded-md ml-4 mt-5 p-2">
                {children}
            </button>
        </Fragment>
    )
}

export default function Props() {
    return (
        <Fragment>
            <AlertButton message={"Hello World!"}>
                Play Movie
            </AlertButton>
            <AlertButton message={"Hello React!"}>
                Play Cartoon
            </AlertButton>
        </Fragment>
    )
}