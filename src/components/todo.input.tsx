import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    name?: string;
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
    const { addNewTodo } = props;
    //string
    const [todo, setTodo] = useState<string>(""); //TypeScript Generics (Extra)
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        if (!todo) {
            alert("Empty todo");
            return;
        }
        addNewTodo({
            id: randomInteger(1, 10000),
            title: todo,
            isComplete: false,
        });
        setTodo("");
    };

    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input value={todo} onChange={handleTextChange} type="text" />
            <button onClick={handleClick}>Add toto</button>
        </div>
    );
};

export default TodoInput;
