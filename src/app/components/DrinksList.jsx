import Link from "next/link";
import Image from "next/image";

const DrinksList = async ({drinks}) => {

    

  const drinksElements = drinks.map(drink => (
    <li key={drink.idDrink}>
        <Link 
          className="text-xl font-medium" 
          href ={`/drinks/${drink.idDrink}`}
        >
          <div className="relative h-48 mb-4">
            <Image
              src={drink.strDrinkThumb}
              fill
              sizes='(max-width:768px) 100vw, (max-width:1200) 50vw'
              alt={drink.strDrink}
              className="rounded-md object-cover" 
            />
          </div>
          {drink.strDrink}
        </Link>
    </li>
  ))

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">{drinksElements}</div>
  )
}

export default DrinksList