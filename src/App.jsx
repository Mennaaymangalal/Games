import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {HeroUIProvider} from "@heroui/react";
import MainLayout from "./Layouts/MainLayout/MainLayout"
import Home from "./Pages/Home/Home"
import Mmorpg from "./Pages/mmorpg/Mmorpg"
import Shooter from "./Pages/shooter/Shooter"
import Sailing from "./Pages/sailing/Sailing"
import Permadeath from "./Pages/permadeath/Permadeath"
import Superhero from "./Pages/superhero/Superhero"
import Pixel from "./Pages/pixel/Pixel"

function App() {
  
 const router = createBrowserRouter([
    {path:'/' , element:<MainLayout/>,children:[
      {index:true , element:<Home/>},
      {index:'mmorpg' , element:<Mmorpg/>},
      {index:'shooter' , element:<Shooter/>},
      {index:'sailing' , element:<Sailing/>},
      {path:'permadeath' , element:<Permadeath/>},
      {path:'superhero' , element:<Superhero/>},
      {path:'pixel', element:<Pixel/>},
    ]}
  ])

  return (
    <>
    <HeroUIProvider>
    <RouterProvider router={router}></RouterProvider>
    </HeroUIProvider>     
    </>
  )
}

export default App
