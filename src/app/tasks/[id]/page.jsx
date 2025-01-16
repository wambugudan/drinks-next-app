import EditForm from "@/app/components/EditForm"
import { getTask } from "../../../../utils/actions"
import Link from "next/link"

const EditTaskPage = async ({params}) => {
  
  const {id} = await params
  const task = await getTask(id)

  return (
    <div className='mb-16'>
      <Link href="/tasks" className="btn btn-accent mb-4">
        back to tasks
      </Link>
      <EditForm task={task}/>
    </div>
  )
}

export default EditTaskPage