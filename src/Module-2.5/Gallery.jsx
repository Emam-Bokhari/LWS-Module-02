import { Fragment } from "react"

export default function Gallery() {
    return (
        <section>

            <h1>
                Inspiring
            </h1>
            <Image />
            <Image />
            <Image />
        </section>
    )
}

function Image() {
    return (
        <Fragment>
            <img src="https://placehold.co/300" />
        </Fragment>
    )
}