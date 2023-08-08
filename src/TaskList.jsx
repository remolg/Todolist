import { useEffect, useState } from "react"
import TaskListItem from "./TaskListItem"

export default function TaskList({ tasks, removeTask, editTask, doneTask }) {
    const [priority, setPriority] = useState(false)
    const [filteredTasks, setFilteredTasks] = useState(tasks)


    function handePriorityFilter() {
        setPriority(prev => !prev)
    }

    //useEffect(() => {function calis},[eger array bos ise ilk component yuklenince anlamina gelir])
    //useEffect(() => {function calis},[item1,item2]) -> [item1 , item2] -> bunlar degisince islem yap..

    useEffect(() => {
        setFilteredTasks(tasks)
    }, [tasks])

    useEffect(() => {
        priority ? setFilteredTasks(tasks.filter(item => item.priority === priority)) : setFilteredTasks(tasks)
    }, [priority])

    if (tasks.length === 0) {
        return <></>
    }
    return (
        <>
            <div className="p-4 bg-light mb-5 border rounded ">
                <h4 className="mb-3">Gorevler
                    <span onClick={handePriorityFilter}
                        className="btn btn-sm btn-info float-end">
                        {!priority ? "Oncelikliler" : "Hepsi"}
                    </span>
                </h4>
                <ul className="list-group my-3 ">
                    {filteredTasks.map(
                        (task) =>
                            <TaskListItem key={task.uuid} task={task} editTask={editTask} removeTask={removeTask} doneTask={doneTask} />
                    )}
                </ul>
            </div>
        </>
    )
}
