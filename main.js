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

    }
    newTask.value = "";

    //criando novo elemento do tipo "li"
    const li = document.createElement('li');
    li.textContent = userText;
    
    //adicionando a lista <ul>
    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);
});






