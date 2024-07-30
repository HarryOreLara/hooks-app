import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {


    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button
                className='btn btn-success'
                onClick={() => increment(2)}
            >+1</button>

            <button
                className='btn btn-secondary'
                onClick={reset}
            >Reset</button>
            <button
                className='btn btn-danger'
                onClick={decrement}
            >-1</button>
        </>
    )
}

export default CounterWithCustomHook
