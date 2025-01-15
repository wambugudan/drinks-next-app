import { editTask } from "../../../utils/actions"


const EditForm = ({content}) => {
  return (
    <form action={editTask}>
      <div className="join w-full">
        <input 
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          value={content}
          required 
        />
        <button type="submit" className="btn btn-primary join-item">
          update task
        </button>
      </div>
    </form>
  )
}

export default EditForm