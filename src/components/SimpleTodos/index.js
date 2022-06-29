import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
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
              <input
                className="length1"
                type="text"
                placeholder="Enter the task here"
              />{' '}
              &nbsp;
              <input className="length2" type="submit" value="submit" />
            </form>
            <h1 className="heading3">Added task in to-do list</h1>
            <div className="card-container">
              <ol className="ordered-lower-number-list">
                1.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <div className="card1  d-flex flex-column justify-content-center">
                    <hr />
                    <p className="para1">Mark as completed</p>
                    <p className="delete1">Delete</p>
                  </div>
                </div>
              </ol>
              <ol className="ordered-lower-number-list">
                2.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <hr />
                  <p className="para2">Mark as completed</p>
                  <p className="delete2">Delete</p>
                </div>
              </ol>
              <ol className="ordered-lower-number-list">
                3.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <hr />
                  <p className="para3">Mark as completed</p>
                  <p className="delete3">Delete</p>
                </div>
              </ol>
              <ol className="ordered-lower-number-list">
                4.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <hr />
                  <p className="para4">Mark as completed</p>
                  <p className="delete4">Delete</p>
                </div>
              </ol>
              <ol className="ordered-lower-number-list">
                5.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <hr />
                  <p className="para5">Mark as completed</p>
                  <p className="delete5">Delete</p>
                </div>
              </ol>
              <ol className="ordered-lower-number-list">
                6.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <hr />
                  <p className="para6">Mark as completed</p>
                  <p className="delete6">Delete</p>
                </div>
              </ol>
              <ol className="ordered-lower-number-list">
                7.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <hr />
                  <p className="para7">Mark as completed</p>
                  <p className="delete7">Delete</p>
                </div>
              </ol>
              <ol className="ordered-lower-number-list">
                8.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <hr />
                  <p className="para8">Mark as completed</p>
                  <p className="delete8">Delete</p>
                </div>
              </ol>
              <ol className="ordered-lower-number-list">
                9.
                <div className="cards">
                  <h1 className="">Task 1</h1>
                  <hr />
                  <p className="para9">Mark as completed</p>
                  <p className="delete9">Delete</p>
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
    )
  }
}

export default SimpleTodos
