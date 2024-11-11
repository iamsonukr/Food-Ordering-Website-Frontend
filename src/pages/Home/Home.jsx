import React, { useEffect ,useState} from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import OurChefs from '../../components/OurChefs/OurChefs'

const Home = () => {
  const[category,setCategory]=useState("All")
  useEffect(()=>{
    console.log(category)
  },[category])
  return (
    <div>
        <Header/>
        <OurChefs/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home