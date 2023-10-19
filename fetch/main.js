const ligne = document.querySelector("#todo-list");
const ligne2 = document.querySelector("#todo-list2");


const api_url = 'https://jsonplaceholder.typicode.com/todos/';

    async function fetchTodos() {
        

        try {
            const response = await fetch(api_url);
            const todos = await response.json();
            let done = todos.filter(todo => todo.completed === true);

            let finis = Number(done.length);
            document.querySelector('.notifs').textContent = finis;
            // Créez un élément de liste pour chaque tâche
            todos.forEach(todo => {
                
                ligne.innerHTML += 
                
    `<tr> 
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.completed}</td>
    </tr>`

    
});

        } catch (error) {
            console.error('Erreur:', error);
        }
        document.querySelector(".table1").style.display = "block";
        document.querySelector(".table2").style.display = "none";

        
        document.getElementById("title").innerText = "Tasks"
}
    
fetchTodos();

async function fetch2Todos() {
        

    try {
        const response = await fetch(api_url);
        const todos = await response.json();
        
        let done = todos.filter(todo => todo.completed === true);

        let finis = Number(done.length);

        document.querySelector('.notifs').textContent = finis;

        // Créez un élément de liste pour chaque tâche
        done.forEach(done => {
            
            ligne2.innerHTML += 
            
            
`<tr> 
    <td>${done.id}</td>
    <td>${done.title}</td>
    <td class="bg-success">${done.completed}</td>
</tr>`


});

    } catch (error) {
        console.error('Erreur:', error);
    }
    document.querySelector(".table1").style.display = "none";
    document.querySelector(".table2").style.display = "block";

 

    document.getElementById("title").innerText = "Tasks Done"

}
let bouton = document.getElementById("myButton");
bouton.addEventListener("click", fetch2Todos);



        
    
    
    

    

