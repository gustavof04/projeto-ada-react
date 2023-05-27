import { useEffect, useState } from "react"

import title_styles from './title.module.css'
import task_styles from './tasks.module.css'

export default function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => setTarefas(res))
    }

    buscarDados()
  }, [])

  return (
    <div>
      <h1 className={title_styles.titulo}>Deploy na vercel</h1>
      <div>
        {tarefas.map((tarefa) => {
          return(
            <div className={task_styles.tarefas} key={tarefa.id}>
              <p> {tarefa.id} - {tarefa.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
