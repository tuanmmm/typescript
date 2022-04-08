import React, {useEffect} from 'react'
import { IProduct } from '../types/product'
import {Link} from 'react-router-dom'

type Props = {}
type ProductManagerProps = {
   products: IProduct[];

}

const Home = (props: ProductManagerProps) => {
   useEffect(()=>{
      $(document).ready(function() {
         $('#lightSlider').lightSlider({
             slideMargin:0,
             loop:true
         });
     });
   }, [])
   console.log(props.products);
   
   return (
      <div>
         <div className="h-[50px]  text-center pt-[20px] mb-[10px]"><h5>THỜI TRANG MỚI NHẤT</h5></div>
         <div className="w-[80%] grid grid-cols-4 gap-4 item-center mx-[auto] ">

            {props?.products?.map((item, index) => {
               return (
                  <div key={index} className="">
                    <Link to={`/ProductDetail/${item?._id}`}><div>
                        <img src={item.image} alt="" />
                     </div>
                     </Link> 
                     <div className="h-[80px] mt-[10px]">
                        <img src={item.image} className="w-[60px] item-center mx-[auto]" alt="" />
                     </div>
                     <div >
                        <span className="" >{item.name}</span> <br />
                        <span className="text-red-600">{item.price}</span>
                     </div>
                  </div>
               )

            })}
         </div>
         <div className="flex justify-between w-[80%] item-center mx-[auto] mt-[50px]">
            <div className='w-[280px] overflow-hidden'>
               <img src="https://4menshop.com/images/thumbs/slides/slide-1-trang-chu-slide-1.png?t=1645676074" className="duration-200 w-full hover:scale-[1.1]" alt="" />
            </div>
            <div className="w-[590px]">
               <div className="w-full overflow-hidden">
                  <img src="https://4menshop.com/images/thumbs/slides/slide-2-trang-chu-slide-2.png?t=1645688534" className="pb-[10px] duration-200 w-full hover:scale-[1.1]  " alt="" />
               </div>
               <div className="w-full overflow-hidden">
                  <img src="https://4menshop.com/images/thumbs/slides/slide-3-trang-chu-slide-3.png?t=1645675981" alt="" className=" duration-200 w-full hover:scale-[1.1]  " />
               </div>
            </div>
            <div className='w-[280px] overflow-hidden'>
               <img src="https://4menshop.com/images/thumbs/slides/slide-4-trang-chu-slide-4.png?t=1645676088" className="w-full duration-200 w-full hover:scale-[1.1]" alt="" />
            </div>

         </div>
         <div className="h-[50px]  text-center pt-[20px]"><h5>THỜI TRANG MỚI NHẤT</h5></div>
         <ul id='lightSlider' className="w-[80%] grid grid-cols-4 gap-4 item-center mx-[auto] ">
            <li className="">
               <div>
                  <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/ao-so-mi-in-hoa-tiet-asm083-mau-den-16613.JPG" alt="" />
               </div>
               <div className="h-[80px] mt-[10px]">
                  <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/asm-in-hoa-tiet-lon-asm081-mau-trang-16599.JPG" className="w-[60px] item-center mx-[auto]" alt="" />
               </div>
               <div >
                  <span >Aó sơ mi mới</span> <br />
                  <span>285.000</span>
               </div>
            </li>
            <li className="">
               <div>
                  <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/asm-in-hoa-tiet-lon-asm081-mau-trang-16599.JPG" alt="" />
               </div>
               <div className="h-[80px] mt-[10px]">
                  <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/asm-in-hoa-tiet-lon-asm081-mau-trang-16599.JPG" className="w-[60px] item-center mx-[auto]" alt="" />
               </div>
               <div >
                  <span >Aó sơ mi mới</span> <br />
                  <span>285.000</span>
               </div>
            </li>
            <li className="">
               <div>
                  <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/asm-in-hoa-tiet-lon-asm081-mau-trang-16599.JPG" alt="" />
               </div>
               <div className="h-[80px] mt-[10px]">
                  <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/asm-in-hoa-tiet-lon-asm081-mau-trang-16599.JPG" className="w-[60px] item-center mx-[auto]" alt="" />
               </div>
               <div >
                  <span >Aó sơ mi mới</span> <br />
                  <span>285.000</span>
               </div>
            </li>
            <li className="">
               <div>
                  <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/asm-in-hoa-tiet-lon-asm081-mau-trang-16599.JPG" alt="" />
               </div>
               <div className="h-[80px] mt-[10px]">
                  <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/asm-in-hoa-tiet-lon-asm081-mau-trang-16599.JPG" className="w-[60px] item-center mx-[auto]" alt="" />
               </div>
               <div >
                  <span >Aó sơ mi mới</span> <br />
                  <span>285.000</span>
               </div>
            </li>
         </ul>
      </div>
   )
}

export default Home