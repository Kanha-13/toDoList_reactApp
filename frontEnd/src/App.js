import React, { useEffect, useState } from 'react';
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import AddToDo from './components/addTodo'
import About from './components/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodos = [];
  initTodos = JSON.parse(localStorage.getItem("todos"))
  if (initTodos === null)
    initTodos = []
  const addToDo = (title, desc) => {
    const newToDo = {
      title: title,
      desc: desc,
    }
    setTodos([...todos, newToDo])
  }
  const deleteThis = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }
  const [todos, setTodos] = useState(initTodos)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <>
            <AddToDo addToDo={addToDo} />
            <Body toDoList={todos} onDelete={deleteThis} />
          </>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
