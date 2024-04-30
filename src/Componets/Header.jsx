import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import logo1 from "./../assets/Images/logo1.png";

import SideNavGenreList from "./SideNavGenreList";
import { HiMoon, HiOutlineBars3CenterLeft, HiOutlineMagnifyingGlass, HiOutlineXMark, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
import { Avatar, Badge, Button, Drawer } from "antd";
import { TbShoppingCartFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";




function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext)

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log('THEME--', theme)

  }, [])

  const iteminfo = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "AboutUs",
      link: "/about",
    },
    {
      name: "ContactUS",
      link: "/contact",
    },
  ];
  const authinfo = [
    {
      name: "Login",
      link: "/login",
    },

    {
      name: "SignUp",
      link: "/signup",
    },
  ];
  const navigate = useNavigate();

  return (

    <>
      <div className="flex items-center p-3 ">
        <img src={logo} width={60} height={60} className="hidden md:block cursor-pointer" />
        <div className="md:hidden ">
          {!toggle ? <HiOutlineBars3CenterLeft onClick={() => setToggle(!toggle)}
            className="dark:text-white text-[25px] cursor-pointer" />
            : <HiOutlineXMark onClick={() => setToggle(!toggle)}
              className="dark:text-white text-[25px] cursor-pointer" />}
          {toggle ?
            <div className="absolute z-10 bg-white  mt-3 dark:bg-[#121212]">
              <SideNavGenreList />
            </div> : null
          }
        </div>
        <div className="flex bg-slate-200 mx-5  p-2 rounded-full items-center px-2 md:w-[400px]">
          <HiOutlineMagnifyingGlass />
          <input type="text" placeholder="Search Games"
            className="bg-transparent w-full outline-none pl-2 items-center rounded-full" />
        </div>

        <div className="flex md:text-[6px] md:gap-x-10 cursor-pointer  gap-x-2 text-[3px]">
          {
            iteminfo.map((item) => {


              return (

                <h1 className="bg-blue-200 p-3 rounded-3xl" onClick={() => navigate(item.link)}> {item.name}</h1>

              )

            })
          }
          <div className="flex items-center ml-3">
            <Badge >
              <Avatar
                size={28}
                icon={<TbShoppingCartFilled />}
                onClick={showDrawer}
              ></Avatar>
            </Badge>
          </div>
          <div className=" p-1 flex gap-x-3 justify-end ">
            {
              authinfo.map((item) => {
                return (

                  <h1 className="bg-blue-200 p-3 rounded-3xl " onClick={() => navigate(item.link)}> {item.name}</h1>

                )

              })
            }

          </div>

        </div>

        {/* <InputGroup className="mx-8">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input type="text" variant="filled" placeholder="Search" borderRadius={50} />
      </InputGroup> */}

        {/* <Switch id="theme"  /> */}
        {/* <Switch colorScheme='green' isChecked={colorMode === 'dark'} 
      onChange={toggleColorMode} /> */}

        {/* <HiOutlineBars3CenterLeft className="text-[30px]" />
      {toggle?
      <div>
         <SideNavGenreList/>
        </div>
       
      :null} */}
        {/* <label className="ml-2">Dark</label> */}

      </div>
      <div className="flex justify-end items-center" >
        {theme == 'dark' ? <HiSun className="text-[35px] cursor-pointer
      bg-gray-200 text-black p-1 rounded-full "
          onClick={() => setTheme('light')} />
          :
          <HiMoon className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full"
            onClick={() => setTheme('dark')} />

        }
        
        <Drawer title="Added" onClose={onClose} open={open}>
         
        </Drawer>
      </div>

    </>


  );
}

export default Header;
