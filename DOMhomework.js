// Crée un array vide appelé 'toDoItems'
// Votre code ici :z
const toDoItems = [];


// dans la page Web 'index.html' il y a un élément span dont le texte est 'Application créée par:'.
// À l'aide de querySelector, sélectionnez la dite span par son id ('createdBy') puis en utilisant innerHTML
// ajoutez votre nom à la fin du texte actuel. Ej: 'Application créée par Webster'
// Votre code ici :
let auteur = document.querySelector('#createdBy');
auteur.innerHTML = 'Application créée par: Merlyn';


//créez une fonction appelée 'ToDo' et elle doit recevoir un seul paramètre de type string
//avec le nom 'description' et à l'intérieur de la fonction nous devons 
//ajouter this.description = description et this.complete = false
//cela signifie que la propriété description doit être égale à la 
//description passée en paramètre et que la propriété complete doit être définie comme false.
// votre code ici :
function ToDo(description) {
    this.description = description;
    this.complete = false;
}


//ajoutez une méthode 'completeTodo' au prototype de la fonction
//Todo qui sera égale à une fonction et à l'intérieur de cette fonction nous allons ajouter
//this.complete = true
// votre code ici :
ToDo.prototype.completeTodo = function () {
    this.complete = true;
};


//creer une fonction qui s'appelle buildTodo e ajouter deux parametres a cette fonction le premier parametre
//c'est todo et l'autre c'est index puis a l interieur de cette fonction
//1-creez un element div et attribuez-le à une variable nommée todoShell
//2-attribuez a todoShell une classe qui s appelle todoShell ex: todoShell.className = 'todoShell'
//3-creez un élément span et affectez-le à une variable nommée todoText
//4-puis utilizer todoText.innerHTML = todo.description
//5-attribuez-l'id de todoText égale a index
//6-puis utilizez cette condition if (todo.complete) todoText.className = "completeText"
//7-attribuez todoText comme l'enfant de todoShell en utilisant appendChild
//8-puis retourner la variable todoShell en utilisant le mot return.
//votre code ici:
function buildTodo(todo, index){
    var todoShell = document.createElement('div');
    todoShell.className = 'todoShell';
    var todoText = document.createElement('span');
    todoText.innerHTML = todo.description;
    todoText.id = index;
    todoText.addEventListener('click', completeTodo);

    if(todo.complete) todoText.className = "completeText";
    todoShell.appendChild(todoText);

    return todoShell;
}



//creer une fonction qui s'appelle 'buildTodos' puis ajouter un paramètre a cette fonction dont le nom est "todos"
//à l'interieur de cette fonction ajouter cette commande : return todos.map(buildTodo)
//votre code ici:
function buildTodos(todos){
    return todos.map(buildTodo);
}

//creer une autre fonction qui s'appelle displayToDos
//à l'interieur de cette fonction sélectionnez l'element dont l'id est toDoContainer en l'attribuant à la variable : let toDoContainer = ......
//puis ajouter toDoContainer.innerHTML = ""
//utiliser la fonction "buildTodos" puis additioner toDoItems comme parametre a cette fonction: let build = buildTodos(toDoItems)
//puis ajouter cette commande :
//for(let i = 0; 1 < build.length; i++){
    //toDoContainer.appendChild(build[i])
//}
//votre code ici:
function displayToDos(){
    let toDoContainer = document.getElementById('toDoContainer');
    toDoContainer.innerHTML = "";
    let build = buildTodos(toDoItems);

    for(let i = 0; i < build.length; i++){
        toDoContainer.appendChild(build[i]);
    }
}

//creer une autre fonction qui s'appelle addTodo()
//a l'interieur de cette fonction utiliser cette commande let newTodo = new Todo(inputValue.value)
//puis utiser cette commande : toDoItems.push(newTodo)
//ensuite utiliser : inputValue.value = ""
//pour terminer ajouter : displayTodos()
//votre code ici:
function addTodo(){
    let inputValue = document.getElementById("toDoInput");
    let newTodo = new ToDo(inputValue.value);
    toDoItems.push(newTodo);
    inputValue.value = "";

    displayToDos();
}


//creer une variable qui s'appelle let addButton et attribuer a cette variable la valeur de document.querySelector("#Button")
//Exemple let assButton = document.querySelector("Button")
//puis utiliser cette commande : addButton.addEventListener('click', addTodo)
let addButton = document.getElementById("addButton");
addButton.addEventListener('click', addTodo);

//retourner a la fonction build todo et utiliser cette commande juste après la cinquième ligne: todoText.addEventListener('click', completeTodo)
//pour terminer ajouter cette fonction
//votre code ici:
function completeTodo(event){
    const index = event.target.id;
    toDoItems[index].completeTodo();
    displayToDos();
}