import React from "react";
import logo from '../../assets/logo-sm.png'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,  
} from "@heroui/react";
import { NavLink } from "react-router-dom";



export default function NavbarComp() {  

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "mmorpg",
    "shooter",
    "sailing",
    "permadeath",
    "superhero",
    "pixel"
  ];

  return (
   <div className="mx-4 lg:mx-32 sticky top-0 z-40">
     <Navbar  onMenuOpenChange={setIsMenuOpen} className=" bg-slate-800 rounded-2xl shadow-lg">
    <NavbarContent>
      <NavbarMenuToggle 
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden "
      />
      <NavbarBrand className="gap-2">
        <img src={logo} className="w-10 h-10"/>       
        <p className="font-bold text-inherit uppercase">Game Reviews</p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          menuItems.map((item,index)=>(
            <NavbarItem key={index}>
            <NavLink
             to={item == "mmorpg" ? "/" : "/" + item.toLocaleLowerCase()}
             color="foreground" href="#">
             {
              item
             }
            </NavLink>
          </NavbarItem>
          ))
        }     
    </NavbarContent>

    <NavbarMenu >
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <NavLink to={item == "mmorpg" ? "/" : "/" + item.toLocaleLowerCase()}
            className="w-full block"
            color={"foreground" }
            href="#"
            size="lg"
          >
            {item}
          </NavLink>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
   </div>
  )
  }