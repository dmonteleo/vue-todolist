const app = new Vue ({
  
  el: '#app',

  data:{
    todos:[
      {
        text: 'Fare la spesa',
        done: false
      },
      {
        text: 'Studiare Vue',
        done: true
      },
      {
        text: 'Pagare la bolletta',
        done: false
      }
    ],
    newTodo: ''
  },

  methods:{
    addTodo(){
      if(this.newTodo.length > 1) {
        const newTodoToPush = {
          text: this.newTodo,
          done: false
        }
        this.todos.push(newTodoToPush);
        this.newTodo = '';
      }   
    },

    removeTodo(index){

      if(confirm(`Sei sicuro di eliminare: ${this.todos[index]}?`)){
        this.todos.splice(index, 1);
      }
    },

    toggleDone(index){
      this.todos[index].done = !this.todos[index].done;
    }
  }
})