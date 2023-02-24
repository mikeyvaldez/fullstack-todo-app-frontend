import axios from 'axios'

const baseUrl = "https://fullstack-todo-app-backend-farz.onrender.com"

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
      setText("")
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("")
      setIsUpdating(false)
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
  axios
    .put(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}


export { getAllToDo, addToDo, updateToDo, deleteToDo }
