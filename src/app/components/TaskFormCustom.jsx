"use client"
import { createTaskCustom } from "../../../utils/actions"
import { useFormStatus } from "react-dom"

// Conditional render of button status 
const SubmitButton = () => {
  const {pending} = useFormStatus()
  console.log(pending);
  
  return(
    <button type="submit" className="btn btn-primary join-item" disabled={pending}>
      {pending ? "Please Wait ..." : "Create Task"}
    </button>
  )
}

const TaskFormCustom = () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input 
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required 
        />
        <SubmitButton />
      </div>
    </form>
  )
}

export default TaskFormCustom