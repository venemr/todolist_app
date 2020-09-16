import React, {Component} from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData"


// function App() {
//     const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
//     return (
//         <div className="todo-list">
//             {todoItems}
//         </div>
//     )
// }

// Two ways to make components: Class based or function based.
// Class based components => Component, PureComponent
// function based components => just one way, const MyComponent = (props) => { ... }
// In 2018/2019, the rule was: Use function based components until you needed functionality from class based components
// in 2020, things are changing a bit. React has added a new concept called "Hooks" that make it possible to create
// function based components with all of the functionality that used to only exist in class based components

const App = () => {
    const [todos, updateTodos] = React.useState(todosData);

    React.useEffect(() => {
        // this is called every single time the component changes
        // in other words, componentDidUpdate.
    }, () => {
        // this is called once the component will "unmount"
    })

    React.useEffect(() => { 
        // this is logically the same as componentDidMount
    }, [])

    const handleChange = (id) => { 
        updateTodos(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed 
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
     };
    const todoItems = todos.map(item => <TodoItem key={item.id} item={item} handleChange={handleChange}/>)
    return (
        <div className="todo-list">
            {todoItems}
        </div>

}


// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     componentDidMount() {
//         // this is called right after this component is rendered for the first time
//     }

//     componentWillUnmount() {
//         // this is called right before the component leaves the JSX tree
//     }

//     componentDidUpdate() {
//         // this is called every single time a prop or state changes
//     }
    
//     handleChange(id) {
//         // console.log("Changed", id)
//         // debugger;
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed 
//                 }
//                 return todo
//             })
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }


//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }

export default App 