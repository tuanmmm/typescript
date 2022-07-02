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
             loop:true,
             item:4
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
         <div className="h-[50px]  text-center pt-[20px] mb-[10px]"><h5>THỜI TRANG BÁN CHẠY</h5></div>
         <div className="w-[80%] mx-auto">
            <ul id='lightSlider'>
            {props.products.map((item, index) => {
               return <div key={index}>
                  <li className="" >
                  <div>
                     <img src={item.image} alt="" />
                  </div>
                  <div className="h-[80px] mt-[10px]">
                     <img src={item.image} className="w-[60px] item-center mx-[auto]" alt="" />
                  </div>
                  <div >
                     <span >{item.name}</span> <br />
                     <span>{item.price}</span>
                  </div>
               </li>
               </div>
                  
               
            })}
               
                
              </ul>
         </div>
      </div>
   )
}

export default Home