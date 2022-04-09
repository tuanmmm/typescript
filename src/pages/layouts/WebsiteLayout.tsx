import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div className="relative overflow-hidden">

      <header className="fixed  w-full pt-2 pb-2 bg-white z-50">
        <div className="bg-[#292929] text-white w-full h-[40px] flex justify-between ">
          <ul>
            <li className=" ml-[70px]  m-[10px]">
              <i className="fa-solid fa-phone" />   Hotline: 0868.444.644
            </li>
          </ul>
          <ul className="flex mr-[100px] m-[10px]">
            <li className="pr-[5px]">Cách chọn size</li>
            <li className="pr-[5px]">|</li>
            <li className="pr-[5px]">Chính sách khách vip</li>
            <li className="pr-[5px]">|</li>
            <li className="pr-[5px]"> Giới thiệu </li>
            <li className="pr-[5px]">|</li>
            <li><i className="fa-solid fa-cart-shopping" /></li>

          </ul>
        </div>
        <nav className=" m-auto  flex justify-between items-center">
          <img className="max-w-0px] ml-[100px] m-[20px]" src="https://res.cloudinary.com/asm-acma-06/image/upload/v1644935389/logo_tgl8n3.png" />
          <ul className="flex text-lg ">
            <li className="pr-3 pl-3  "><NavLink className="text-black  no-underline hover:bg-[#027bc6]" to="/">HOME PAGE</NavLink></li>
            <li className="pr-3 pl-3  "> <NavLink className="text-black no-underline hover:bg-[#027bc6]" to="/admin">ADMIN</NavLink></li>
            <li className="pr-3 pl-3  "> <NavLink className="text-black no-underline hover:bg-[#027bc6]" to="/about">ABOUT</NavLink> </li>
          </ul>
          <div className="w-[300px]">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div className="mr-[100px]">
            <a className="abcd" href="/signup"><button className="border p-[5px] font-bold  bg-[#292929] text-white text-[17px] hover:bg-[#027bc6]">Đăng kí</button></a>
            <a className="abcd" href="/signin"><button className="border p-[5px] font-bold  bg-[#292929] text-white text-[17px] hover:bg-[#027bc6]">Đăng nhập</button></a>
          </div>
        </nav>
      </header> ]
      <div>
        <img src="https://ngocfashion.com/4men-shop-ha-noi/imager_2_703_700.jpg" className="w-[100%] h-[600px] object-cover mt-[100px]" alt="" />
      </div>
      <main>
        <Outlet />
      </main>
      <div className=" bg-slate-50 h-[230px] ">
      <div className="container mt-[50px] pt-[50px] border-t">
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="pi-wrap">
              <div className="flex items-center justify-between">
                <i className="fa fa-plane text-2xl" aria-hidden="true" />
                <h4 className="text-base border-b ">THANH TOÁN &amp; GIAO HÀNG</h4>  <hr />
              </div>
              <p>Miễn phí vận chuyển cho đơn hàng trên 499.000 VNĐ
                <br /> - Giao hàng và thu tiền tận nơi <br />
                - Chuyển khoản và giao hàng
                <br />
                - Mua hàng tại shop</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="pi-wrap">
              <div className="flex items-center">
                <i className="fa fa-credit-card text-2xl mr-[10px]" aria-hidden="true" />
                <h4 className="text-base border-b ">THẺ THÀNH VIÊN</h4>
              </div>
              <p>Chế độ ưu đãi thành viên VIP:
                <br />
                - 5% cho thành viên Bạc
                <br />
                - 10% cho thành viên Vàng
                <br />
                - 15% cho thành viên Kim cương</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="pi-wrap">
              <div className="flex">
                <i className="fa-solid fa-clock text-2xl mr-[10px]"></i>
                <h4 className="text-base border-b ">GIỜ MỞ CỬA<span /></h4>
              </div>
              <p><strong>8h30 đến 22:00</strong><br />
                - Tất cả các ngày trong tuần<br />
                - Áp dụng cho tất cả các chi nhánh hệ thống cửa hàng 4MEN</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="pi-wrap">
              <div className="flex">
                <i className="fa fa-headphones text-2xl mr-[10px]" />
                <h4 className="text-base border-b ">Hỗ trợ 24/7</h4>
              </div>
              <p>Gọi ngay cho chúng tôi khi bạn có thắc mắc<br />
                - 0868.444.644</p>
            </div>
          </div>
        </div>
      </div>
      </div>


      <footer className="py-5 bg-[#292929] text-white ">

        <div className="row ">
          <div className="ml-[100px]" >
            <img src="https://4menshop.com/logo-footer.png?v=1" className="mb-[40px]"></img>
          </div>
          <div className="col-2 ml-[100px]">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
            </ul>
          </div>
          <div className="col-3 offset-1  ">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-between py-4 my-4 border-top ml-[100px] mr-[100px]">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>



  )
}

export default WebsiteLayout