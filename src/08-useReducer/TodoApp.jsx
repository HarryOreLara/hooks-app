
import TodoList from "./components/TodoList"
import TodoAdd from "./components/TodoAdd"
import useTodos from "../hooks/useTodos"



const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();

  return (
    <>
      <h1>TodoApp: {todosCount} <small>pendientes: {pendingTodosCount}</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos} 
          onDeleteTodo={id=>handleDeleteTodo(id)} 
          onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/*TodoAdd  onNewTodo(todo)*/}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}

export default TodoApp
