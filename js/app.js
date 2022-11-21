/**
 * Todolist
 */
 const tasks = [
    {
      text: 'Faire un todolist en JS',
      done: true,
    },
    {
      text: 'Faire un todolist en React',
      done: true,
    },
    {
      text: 'Coder Facebook',
      done: false,
    },
    {
      text: 'Test',
      done: true,
    },
  ];
  
  const app = {
    container: document.getElementById('todo'),
    init: () => {
      // app.container = document.getElementById('todo');
      app.container.innerHTML = '';
      app.createForm();
      app.createCounter();
      app.createTaskList();
      app.updateCounter();
    },
    createForm: () => {
      // création du form
      const form = document.createElement('form');
      form.classList.add('form');
  
      // création de l'input text
      app.input = document.createElement('input');
      app.input.className = 'form__input';
      app.input.type = 'text';
      app.input.placeholder = 'Ajouter une tâche';
  
      form.appendChild(app.input);
      form.addEventListener('submit', (event) => {
        event.preventDefault();
  
        // console.log(event.target[0].value);
        app.handleSubmit();
      });
  
      // dans cette forme on devra gérer le event.preventDefault dans ses instructions
      // form.addEventListener('submit', app.handleSubmit);
  
      app.container.appendChild(form);
    },
    // fonction qui gère les submit du form
    handleSubmit: () => {
      console.log('handleSubmit');
    
      const newTask = {
        text: app.input.value,
        done: false,
      };
  
      // app.generateTask(newTask);
      tasks.push(newTask);
      app.init();
      // app.input.value = '';
      // app.updateCounter();
    },
    createCounter: () => {
      app.counter = document.createElement('p');
      app.counter.className = 'counter';
      app.container.appendChild(app.counter);
    },
    updateCounter: () => {
      let text = 'Aucune tâche en cours';
  
      // sélecteur qui nous retournerna le nombre de taĉhe en cours
      const undoneTasks = document.querySelectorAll('.task:not(.task--done)').length;
  
      if (undoneTasks === 1) {
        text = '1 tâche en cours';
      } else if (undoneTasks > 1) {
        text = `${undoneTasks} tâches en cours`;
      }
  
      app.counter.textContent = text;
    },
    createTaskList: () => {
      app.taskList = document.createElement('ul');
      app.taskList.className = 'tasks';
  
      // tasks.forEach((task) => {
      //   app.generateTask(task);
      // });
      tasks.forEach(app.generateTask);
  
      app.container.appendChild(app.taskList);
    },
    generateTask: (task) => {
      const { text, done } = task;
      const li = document.createElement('li');
      li.className = 'task';
      
      if (done) {
        li.classList.add('task--done');
      }
  
      const id = `${text}${Date.now()}`;
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = id;
      checkbox.className = 'task__checkbox';
      checkbox.checked = done;
  
      const label = document.createElement('label');
      label.className = 'task__label';
      label.htmlFor = id;
      label.textContent = text;
  
  
      checkbox.addEventListener('change', (event) => {
        console.log(event);
        // toggle permet d'ajouter la classe quand elle n'est pas présente et elle la retire quand elle est présente
        // li.classList.toggle('task--done');
  
        task.done = !done;
        app.init();
        // app.updateCounter();
      });
  
      li.appendChild(checkbox);
      li.appendChild(label);
  
      app.taskList.appendChild(li);
    }
  };
  
  
  // Chargement du DOM
  document.addEventListener('DOMContentLoaded', app.init);