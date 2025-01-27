"use client"
import { useEffect } from "react"
import { createTaskCustom } from "../../../utils/actions"
import { useFormStatus, useFormState } from "react-dom"
import toast from "react-hot-toast"

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

const initialState = {message: null,}

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)

  // Set up display message for success and error using Toaster library
  useEffect(() => {
    if(state.message === 'error'){
      toast.error("there was an error")
      return
    }

    if(state.message){
      toast.success("task created")
      return
    }

  }, [state])

  return (
    <form action={formAction}>
      {/* Checking for state to display error or success message on form submission */}
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      
      {/* Form Logic */}
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