import { useDispatch, useSelector } from "react-redux";
import { filteredByColor, filteredByStatus } from "../redux/filters/actions";
import { FilterModel } from "../redux/filters/reducer";
import { TodoModel } from "../redux/todos/reducer";

interface TodoState {
  todos: TodoModel[];
}

interface FilterState {
  filters: FilterModel;
}

const Filter = () => {
  const todosL = useSelector(
    (state: TodoState) =>
      state.todos.filter((todo) => todo.completed === false).length
  );
  const filters = useSelector((state: FilterState) => state.filters);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{todosL} tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            filters.status === "All" && "font-bold"
          }`}
          onClick={() => dispatch(filteredByStatus("All"))}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters.status === "Incomplete" && "font-bold"
          }`}
          onClick={() => dispatch(filteredByStatus("Incomplete"))}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters.status === "Complete" && "font-bold"
          }`}
          onClick={() => dispatch(filteredByStatus("Complete"))}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => {
            if (filters.colors.includes("green")) {
              dispatch(filteredByColor("green", "removed"));
            } else {
              dispatch(filteredByColor("green", "added"));
            }
          }}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => {
            if (filters.colors.includes("red")) {
              dispatch(filteredByColor("red", "removed"));
            } else {
              dispatch(filteredByColor("red", "added"));
            }
          }}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => {
            if (filters.colors.includes("yellow")) {
              dispatch(filteredByColor("yellow", "removed"));
            } else {
              dispatch(filteredByColor("yellow", "added"));
            }
          }}
        ></li>
      </ul>
    </div>
  );
};

export default Filter;
