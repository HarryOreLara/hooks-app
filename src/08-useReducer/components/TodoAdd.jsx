import useForm from "../../hooks/useForm"

const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const { description } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();

    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name='description'
                    autoComplete="off"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >Agregar
                </button>
            </form>
        </>
    )
}

export default TodoAdd
