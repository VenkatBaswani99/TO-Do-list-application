import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: '',
  },
  {
    id: 2,
    title: '',
  },
  {
    id: 3,
    title: '',
  },
  {
    id: 4,
    title: '',
  },
  {
    id: 5,
    title: '',
  },
  {
    id: 6,
    title: '',
  },
  {
    id: 7,
    title: '',
  },
  {
    id: 8,
    title: '',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container1">
          <h1 className="heading1"> To-Do List</h1>
          <div className="simple-todos-container2">
            <h1 className="heading2">Add a new task in the list</h1>
            <form>
              <input type="text" placeholder="Enter the task here" /> &nbsp;
              <input type="submit" value="submit" />
            </form>
            <h1 className="heading3">Added task in to-do list</h1>
            <div className="card-container">
              <div className="d-flex flex-row justify-content-center">
                <ol className="ordered-lower-number-list">
                  1
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <div className="card1">
                      <p className="para1">Mark as completed</p>
                    </div>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
                <ol className="ordered-lower-number-list">
                  2.
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <p className="para1">Mark as completed</p>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
                <ol className="ordered-lower-number-list">
                  3.
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <p className="para1">Mark as completed</p>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
                <ol className="ordered-lower-number-list">
                  4.
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <p className="para1">Mark as completed</p>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
                <ol className="ordered-lower-number-list">
                  5.
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <p className="para1">Mark as completed</p>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
                <ol className="ordered-lower-number-list">
                  6.
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <p className="para1">Mark as completed</p>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
                <ol className="ordered-lower-number-list">
                  7.
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <p className="para1">Mark as completed</p>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
                <ol className="ordered-lower-number-list">
                  8.
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <p className="para1">Mark as completed</p>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
                <ol className="ordered-lower-number-list">
                  9.
                  <div className="cards">
                    <h1 className="">Task1</h1>
                    <p className="para1">Mark as completed</p>
                    <p className="para2">Delete</p>
                  </div>
                </ol>
              </div>
            </div>

            <ul className="todos-list">
              {todosList.map(eachTodo => (
                <TodoItem
                  key={eachTodo.id}
                  todoDetails={eachTodo}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
