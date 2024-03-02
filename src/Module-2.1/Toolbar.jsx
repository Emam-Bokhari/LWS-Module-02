import { Fragment } from "react";

export default function Toolbar() {
    return (
        <Fragment>
            <Alert onPlayMovie={() => {
                alert("Playing...")
            }} onUploadingImage={() => {
                alert("Uploading...")
            }} />
        </Fragment>
    )
}

function Alert({ onPlayMovie, onUploadingImage }) {
    return (
        <Fragment>

            <Button onSmash={onPlayMovie} >
                Play Movie
            </Button>

            <Button onSmash={onUploadingImage} >
                Upload Image
            </Button>

        </Fragment>
    )
}

function Button({ onSmash, children }) {
    return (
        <Fragment>
            <button onClick={onSmash}   className="bg-purple-500 p-2 mt-5 ml-4 rounded-md text-white" >
                {children}
            </button>
        </Fragment>
    )
}