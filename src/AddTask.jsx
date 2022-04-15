const AddTask = props => {
    var cont = 0
    const handleSubmit = e => {
        e.preventDefault()
        
        const titleTask = document.querySelector("input.title")
        const descriptionTask = document.querySelector("input.description")
        
        if (titleTask.value !== "" && descriptionTask !== "") {
            fetch("https://bantu-api.herokuapp.com/v1/task/store", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        title: titleTask.value,
                        description: descriptionTask.value
                    })
                })
                .then(() => {
                    fetch("https://bantu-api.herokuapp.com/v1/task/all")
                    .then(response => response.json())
                    .then(data => {
                        props.setTasks(data.response)
                    })
                })

            titleTask.value = ""
            descriptionTask.value = ""
        }
        
        titleTask.focus()
    }

    return (
        <div className="add-task">
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Titulo..." className="title"/>
                <input type="text" placeholder="Escreva a sua Tarefa..." className="description"/>
                <button>Adicionar</button>
            </form>
        </div>
    );
}
 
export default AddTask;