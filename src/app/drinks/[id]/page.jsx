import Link from "next/link"
import Image from "next/image";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`)

  if (!response.ok) {
    throw new Error("Failed to fetch drink")
  }

  return response.json()
}

const singleDrinkPage = async ({params}) => {

  const {id} = await params

  if (!params || !id) {
    throw new Error("params or params.id is undefined");
  }

  
  const data = await getSingleDrink(id);
  const title = data?.drinks?.[0]?.strDrink;
  const srcImage = data?.drinks?.[0]?.strDrinkThumb;

  console.log(srcImage);
  
  return (
    <div>
      <Link href='/drinks' className="btn btn-primary my-8"> Back to Drinks </Link>
      <Image 
        src={srcImage} 
        height={300} 
        width={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4" 
        priority
        alt={title}
      />
      <h1 className="text-2xl"> {title}</h1>
      
      
    </div>
  )
}

export default singleDrinkPage