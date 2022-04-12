import React from 'react';
import './App.css';
import Screen from './components/Screen'
import Button from './components/Button'

function App() {
  const [theme , setTheme] = React.useState("#fff")

  React.useEffect(()=>{
        window.addEventListener("load",function(){
         let mytheme =  localStorage.getItem("theme")
         if(mytheme)
         {
            setTheme(mytheme)
            document.documentElement.style.setProperty('--theme', mytheme);
         }
        })
    },[])

  const changeTheme = (name)=>{

      setTheme(name)
      localStorage.setItem("theme",name)
      document.documentElement.style.setProperty('--theme', name);
  }
  return (
    <>
      <Button theme={theme} handler={changeTheme}/>
      <Screen theme={theme}/>
    </>
  );
}

export default App;
