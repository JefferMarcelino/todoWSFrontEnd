const TaskList = props => {
    const deleteTask = e => {
        fetch(`https://bantu-api.herokuapp.com/v1/task/remove/${e.target.parentElement.id}`, {
            method:"delete"
        }).then(() => {
            fetch("https://bantu-api.herokuapp.com/v1/task/all")
            .then(response => response.json())
            .then(data => {
                props.setTasks(data.response)
            })
        })

    }

    const tasks = props.tasks.map(task => {
        return (
            <div className="task" key={ task.id } id={ task.id }>
                <div className="text">
                    <h1>{ task.title }</h1>
                    <p>{ task.description }</p>
                </div>
                <button onClick={deleteTask}></button>
            </div>
        )
    })

    return (
        <div className="tasks">
            { tasks }
        </div>
    );
}
 
export default TaskList;