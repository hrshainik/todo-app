import { useSelector } from "react-redux";
import { FilterModel } from "../redux/filters/reducer";
import { TodoModel } from "../redux/todos/reducer";
import Todo from "./Todo";

interface TodoState {
  todos: TodoModel[];
}

interface FilterState {
  filters: FilterModel;
}

const TodoList = () => {
  const { status, colors } = useSelector((state: FilterState) => state.filters);
  const todos = useSelector((state: TodoState) => state.todos);

  const statusFilteredTodos = todos.filter((todo) => {
    if (status === "Incomplete") {
      return !todo.completed;
    } else if (status === "Complete") {
      return todo.completed;
    } else {
      return true;
    }
  });

  const finalFilteredTodos = statusFilteredTodos.filter((todo) => {
    if (colors.length > 0) {
      if (todo.color && colors.includes(todo.color)) {
        return todo;
      }
    } else {
      return true;
    }
  });

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {finalFilteredTodos.length ? (
        finalFilteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <h1 className="text-center">Not Found</h1>
      )}
    </div>
  );
};

export default TodoList;
