import { useState } from "react";
import { sculptureList } from "../data.js";

export default function Gallery() {

    const [index, setIndex] = useState(0)

    function handleClick() {
        setIndex(
            index + 1
        )
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
            <br />
            <br />
            <hr />
            <br />
            <br />

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quaerat magni quae ea quidem eveniet nulla. Possimus maiores ipsum exercitationem.</p>

            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem laboriosam atque saepe expedita assumenda. Quis mollitia deserunt aut at iste? Cupiditate, dignissimos tenetur. Maiores, nam eveniet! Officiis eum fugit vel.</p>
            </div>

        </>
    );
}
