import { useState } from "react"
import Navbar from "./components/navbar"
import NewsBoard from "./components/newsBoard"


export const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App