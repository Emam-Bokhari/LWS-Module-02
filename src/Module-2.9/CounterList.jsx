import { useState } from 'react';

let initialCounters = [
    0, 0, 0
];

export default function CounterList() {
    const [counters, setCounters] = useState(
        initialCounters
    );

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                // Increment the clicked counter
                return c + 1;
            } else {
                // The rest haven't changed
                return c;
            }
        });
        setCounters(nextCounters);
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}
                    <button
                        className="bg-purple-600 text-white ml-2 px-2 mt-2 rounded-sm"
                        onClick={() => {
                            handleIncrementClick(i);
                        }}>+1</button>
                </li>
            ))}
        </ul>
    );
}