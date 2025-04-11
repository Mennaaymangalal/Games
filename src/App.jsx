import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {HeroUIProvider} from "@heroui/react";
import MainLayout from "./Layouts/MainLayout/MainLayout"
import Mmorpg from "./Pages/mmorpg/Mmorpg"
import Shooter from "./Pages/shooter/Shooter"
import Permadeath from "./Pages/permadeath/Permadeath"
import Superhero from "./Pages/superhero/Superhero"
import Pixel from "./Pages/pixel/Pixel"
import NotFound from "./Pages/NotFound/NotFound";
import Sailing from "./Pages/sailing/Sailing";

function App() {
  
 const router = createBrowserRouter([
    {path:'/' , element:<MainLayout/>,children:[      
      {index: true , element:<Mmorpg/>},
      {path:'shooter' , element:<Shooter/>},
      {path:'sailing' , element:<Sailing/>},
      {path:'permadeath' , element:<Permadeath/>},
      {path:'superhero' , element:<Superhero/>},
      {path:'pixel', element:<Pixel/>},
      {path: '*' , element:<NotFound/>}
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
