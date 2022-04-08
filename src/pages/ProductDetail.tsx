import { read } from '../api/product';
import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
import { useParams } from 'react-router-dom';
type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  
    const [product, setProduct] = useState<IProduct>();
    useEffect(() => {
        const getProduct = async() => {
            const { data } = await read(id);
            setProduct(data)
        }
        getProduct();
    }, [id])
  console.log(product);

  return (
    <div>
      <div>
        <div className="w-[1200px] mx-auto grid grid-cols-2 my-[50px] bg-white rounded-[10px]">
          <div className="m-[20px]">
            <img src="https://4menshop.com/cache/image/300x400/images/thumbs/2022/02/asm-in-hoa-tiet-lon-asm081-mau-trang-16599.JPG" />
          </div>
          <div className="m-[20px]">
            <p className="text-[36px] pb-[20px] text-[#027bc6]"> {product?.name}</p>
            <p className="text-[36px] pb-[20px] text-red-600">{product?.price} VND</p>
            <input type="number" id="inputValue" className="border border-black w-[50px] mb-[10px]" defaultValue={1} /> <br />
            <button id="btnAddTocart" className="border p-[10px] rounded-[10px] bg-[#57d7ff] hover:bg-[#027bc6] text-[17px] font-bold text-white ">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default ProductDetail