import { Fragment } from "react";

export default function Bubbling() {
    return (
        <Fragment>
            <div onClick={() => {
                console.log("Play dance!")
            }} >

                <div onClick={() => {
                    console.log("Play movie!")
                }}>

                    <button onClick={() => {
                        console.log("Play cricket!")
                    }} className="bg-purple-500 text-white p-2 ml-4 mt-5 rounded-sm" >
                        Cricket
                    </button>

                    <button onClick={() => {
                        console.log("Play music!")
                    }} className="bg-purple-500 text-white p-2 ml-4 mt-5 rounded-sm" >
                        Music
                    </button>

                </div>

            </div>
        </Fragment>
    )
}