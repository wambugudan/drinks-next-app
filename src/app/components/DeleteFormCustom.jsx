'use client'

import { deleteTaskCustom } from "../../../utils/actions"
import { useFormStatus, useFormState } from "react-dom"

// Setup delete button function
const DeleteButton = () => {
  const {pending} = useFormStatus()

  return(
    <button className='btn btn-xs btn-error' disabled={pending}>
      {pending ? 'deleting ...' : 'delete'}
    </button>
  )
}


const DeleteFormCustom = ({id}) => {
  return (
    <form action={deleteTaskCustom}>
      <input type="hidden" name='id' value={id} />
      <DeleteButton />
    </form>
  )
}

export default DeleteFormCustom