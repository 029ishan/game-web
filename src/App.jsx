import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Home from './Pages/Home'
import { ThemeContext } from './Context/ThemeContext'
import Footer from './Componets/Footer'

// import ThemeContext from './Context/ThemeContext'
//export const ThemeContext = createContext('dark');

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
useEffect(()=>{
   
  setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')

},[])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={`${theme} ${theme=='dark'?'bg-[#121212]':null}`}>
        <div> 
        <Header/>
          
        </div>
        <div  > 
        <Home/>
        <Footer/>
        </div>
        
       
    </div>
     </ThemeContext.Provider>
  )
}

export default App
