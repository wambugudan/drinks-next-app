import DrinksList from "../components/DrinksList";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

export const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch Drinks.');
  }
  const data = await response.json();

  return data;
}



const DrinksPage = async () => {
  const data = await fetchDrinks()
  // console.log(data)
  return (
    <div>
      <h1 className='text-7xl'>Drinks Page</h1>
      <div className="flex flex-wrap justify-center">
        <DrinksList drinks={data.drinks}/>
      </div>
    </div>
  )
}

export default DrinksPage