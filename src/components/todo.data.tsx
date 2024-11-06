interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string; //Optional Props(Thuộc tính có thể truyền hoặc không)
    age?: number;
    isDev?: boolean;
}

/**
 *
 * - Trong những trường hợp đơn giản khai báo 1 thuộc tính thì nên định nghĩa type
 * - Trong trường hợp với object thì định nghĩa bằng interface
 */

const TodoData = (props: IProps) => {
    const { todos } = props;
    //Default owner
    return (
        <div>
            {todos.map((item) => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }}>
                            {item.id} - {item.title}
                            &nbsp;&nbsp;&nbsp;<button>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default TodoData;
