import Card from './Card'
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../Shared/LoadingSpinner'
import queryFetch from '../../utilitis/queryFetch'

const Meals = () => {

  const {data:meals, isLoading,  isError} = useQuery({
    queryKey: ['meals'],
    queryFn: async ()=>queryFetch('meals')
  })
if(isLoading) return <LoadingSpinner/>
console.log(meals);

  return (
    <Container>
      <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {
          meals.map(meal=><Card key={meal._id} meal={meal}/>)
        }
      </div>
    </Container>
  )
}

export default Meals
