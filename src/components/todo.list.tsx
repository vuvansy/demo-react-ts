import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
const TodoList = () => {
    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false,
    //     },
    //     {
    //         id: 2,
    //         title: "Subscribe Youtube HoiDanIT",
    //         isComplete: true,
    //     },
    //     {
    //         id: 3,
    //         title: "Learn English",
    //         isComplete: true,
    //     },
    // ];

    const [listTodo, setListTodo] = useState<ITodo[]>([]);
    return (
        <div
            style={{
                width: "600px",
                margin: "50px auto",
                border: "1px solid #ccc",
                borderRadius: 10,
                padding: 10,
            }}
        >
            <div
                style={{
                    padding: "10px 0",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    borderBottomStyle: "solid",
                }}
            >
                My todo list:{" "}
            </div>

            <br />
            <TodoInput name="your todo" />
            <TodoData
                todos={listTodo}
                //owner={"Admin"}
                //age={20}
                //isDev={true}
            />
        </div>
    );
};

export default TodoList;
