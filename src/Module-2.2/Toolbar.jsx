import { Fragment } from "react";

function Button({ onSmash, children }) {
    return (
        <Fragment>
            <button onClick={(event) => {
                event.stopPropagation()
                onSmash()
            }} className="bg-purple-500 text-white text-sm rounded-md p-2"  >
                {children}
            </button>
        </Fragment>
    )
}

export default function Toolbar() {
    return (
        <Fragment>

            <div onClick={() => {
                console.log("You clicked Toolbar!")
            }} >

                <Button onSmash={() => {
                    console.log("Hello React!")
                }} >
                    Play React
                </Button>

            </div>

        </Fragment>
    )
}



