import { useState } from 'react'
import {Header} from './Components/Header'
import {Profile} from './Components/Profile'
// import {Home} from './Components/Home'
 import {About} from './Components/About'
// import {Skill} from './Components/Skill'
// import {Project} from './Components/Project'
// import {Contact} from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Header />
    <Profile />
    </>
  )
}

export default App
