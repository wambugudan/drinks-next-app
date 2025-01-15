import Link from "next/link"
import DeleteForm from "./DeleteForm"
import { getAllTasks } from "../../../utils/actions"


const TaskList = async () => {
  const tasks = await getAllTasks()


  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No task found </h2>
  }
  return (
    <ul>
      {
        // Displaying tasks
        tasks.map(task => {
          return (
          <li key={task.id} 
            className=" flex justify-between items-center px-6 py-4 my-6 border border-base-300 rounded-lg shadow-lg"
          >
            <h2 
              className={`text-lg capitalize ${task.completed? 'line-through' : null}`}
            >
              {task.content}
            </h2>

            {/* Adding buttons to the tasks */}
            <div className="flex gap-6 items-center">
              <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs ">
                Edit
              </Link>
              <DeleteForm id={task.id}/>
            </div>
          </li>
          )
        })
      }

    </ul>
  )
}

export default TaskList