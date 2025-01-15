import EditForm from "@/app/components/EditForm"


const EditTaskPage = async ({params}) => {

  const {id} = await params  

  return (
    <div className='max-w-lg'>
        <EditForm id={id}/>
      </div>
  )
}

export default EditTaskPage