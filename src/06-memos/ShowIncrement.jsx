
const ShowIncrement = ({ increment }) => {


    return (
        <button className="btn btn-primary"
            onClick={() => {
                increment()
            }}
        >
            Inrementar
        </button>
    )
}

export default ShowIncrement
