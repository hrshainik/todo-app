import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo: any) => (
        <Todo key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
