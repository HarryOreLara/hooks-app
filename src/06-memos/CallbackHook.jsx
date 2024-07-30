import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {

    const [counter, setcounter] = useState(10);

    const incrementFather = useCallback(
        () => {
            setcounter((value) => value + 1);
        },
        [],
    )

    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}

export default CallbackHook
