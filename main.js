// Adiciona o ouvinte de evento fora da função addInputList()
const button = document.getElementById('myButton');
const inputs = []; // Movido para fora da função para garantir que o array seja compartilhado entre cliques

button.addEventListener('click', function(event) {
    // Pegar o id do input
    const newTask = document.querySelector("#taskInput");
    // Pegar o texto do input e remover espaços em branco no início e no final
    const userText = newTask.value.trim();

    if (userText !== "") {
        // Adicionar o texto ao array inputs
        inputs.push(userText);
        console.log(inputs);

        // Limpar o campo do input definindo o valor como uma string vazia
        newTask.value = "";

        // Criar um novo elemento <li> com o texto da tarefa
        const li = document.createElement('li');
        li.textContent = userText;

        // Criar o botão "deletar"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Deletar";

        // Adicionar evento de clique para remover a tarefa
        deleteButton.addEventListener('click', function() {
            li.remove(); // Remove o elemento <li> correspondente ao botão "deletar"
        });

        // Adicionar o botão "deletar" ao elemento <li>
        li.appendChild(deleteButton);

        // Adicionar o novo item à lista de tarefas (<ul>)
        const taskList = document.getElementById('taskList');
        taskList.appendChild(li);
    }
});







