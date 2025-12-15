import Card from './Card'
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Meals = () => {

  const fetchMeals = async ()=>{
    const mealsData = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/meals`)
    return mealsData
  }

  const info = useQuery({
    queryKey: ['meals'],
    queryFn: fetchMeals
  })

console.log(info);

  return (
    <Container>
      <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        <Card />
      </div>
    </Container>
  )
}

export default Meals
