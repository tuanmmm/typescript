import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
   <div>
     <div className="bg-slate-900 h-[40px] border-t-1 dis"> 
     <div className="w-[1280px] pr-[15px] pl-[15px] mr-[auto] ml-[auto]"> 
       <div className="row"> 
         <div className="col-md-12 col-sm-12"> 
          <div className="tb_center pull-left text-white"> 
                <ul> 
                    <li className="s-fa s-fa-phone "> Hotline:0868.444.644</li>
                </ul> 
           </div>
             <div className="tb_right pull-right"> 
                <ul>
                    <li> 
                      <div className="tbr-info"> <a href="https://4menshop.com/huong-dan-chon-size.html" title="cach chon size quan ao">Cách chọn Size</a></div>
                    </li> 
                    <li> 
                      <div className="tbr-info"> <a href="https://4menshop.com/chinh-sach-khach-vip.html" title="chinh sach khach vip">Chính sách khách vip</a> </div>
                    </li> 
                    <li className="hidden-xs">
                       <div className="tbr-info"> <a href="https://4menshop.com/gioi-thieu.html" title="gioi thieu">Giới thiệu</a> </div>
                    </li>
                </ul> 
          </div> 
        </div> 
      </div> 
    </div>  
    </div> 
  <header className="  w-full pt-2 pb-2 ">
    <nav className=" m-auto  flex justify-between items-center  ">
      <img className="max-w-0px] ml-[100px] m-[20px]" src="https://res.cloudinary.com/asm-acma-06/image/upload/v1644935389/logo_tgl8n3.png"  />
      <ul className="flex text-lg ">
        <li className="pr-3 pl-3  "><NavLink className="text-black  no-underline hover:bg-[#027bc6]" to="/">HOME PAGE</NavLink></li>
        <li className="pr-3 pl-3  "> <NavLink className="text-black no-underline hover:bg-[#027bc6]" to="/admin">ADMIN</NavLink></li>
        <li className="pr-3 pl-3  "> <NavLink className="text-black no-underline hover:bg-[#027bc6]" to="/about">ABOUT</NavLink> </li>         
      </ul>
      <ul className=" flex text-lg ">
        <li className="pr-3 pl-3"><i className="fa-solid fa-magnifying-glass" /></li>
        <li id="sign" className="pr-3 pl-3"><i className="fa-solid fa-circle-user" /></li>
        <li className="pr-3 pl-3"><a ><i className="fa-solid fa-heart" /></a></li>
        <li className="pr-3 pl-3"><i className="fa-solid fa-cart-shopping" /></li>
      </ul>
      <div className="mr-[100px]">
        <a className="abcd" href="/signup"><button className="border p-[5px] font-bold  bg-[#5e6df7] text-white text-[17px] hover:bg-[#027bc6]">Đăng kí</button></a>
        <a className="abcd" href="/signin"><button className="border p-[5px] font-bold   bg-[#5e6df7] text-white text-[17px] hover:bg-[#027bc6]">Đăng nhập</button></a>
      </div>
    </nav>
  </header>
  <main>
    <Outlet/>
    </main>
  <footer>
    Footer
  </footer>
</div>

  )
}

export default WebsiteLayout