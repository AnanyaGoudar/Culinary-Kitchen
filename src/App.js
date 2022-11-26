import React from "react"
import Header from "./components/Header"
import Variety from "./components/Variety"
import Cuisine from "./components/Cuisine"
import Chef from "./components/Chef"
import FoodGuide from "./components/FoodGuide"
import Footer from "./components/Footer"

function App(){
  return (
    <>
      <Header/>
      <Variety/>
      <Cuisine/>
      <Chef/>
      <FoodGuide/>
      <Footer/>
    </>
  )
}

export default App;