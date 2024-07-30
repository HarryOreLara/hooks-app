import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"



const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Ahi vamos...")
    }

    return `${iterationNumber} iteraciones realizadas`;
}


const MemoHook = () => {


    const { counter, increment } = useCounter(500);
    const [show, setshow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])



    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />


            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-primary mt-2"
                onClick={() => increment(1)}
            >+1</button>


            <button
                className="btn btn-otline-primary mt-2"
                onClick={() => setshow(!show)}
            >Show / Hide {JSON.stringify(show)} </button>
        </>
    )
}

export default MemoHook
