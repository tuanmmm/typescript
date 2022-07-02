import React, { useEffect, useState} from 'react'
import {useForm , SubmitHandler} from 'react-hook-form'
import {useNavigate ,useParams} from 'react-router-dom'
import {read} from '../api/product'
import {IProduct} from '../types/product'
type UpdateProps = {
    onUpdate: (product : IProduct)=> void
}
type FormInputs = {
    name : string,
    price : number,
    image:string
}
const ProductEdit = (props: UpdateProps) => {
    const {register ,handleSubmit ,formState: {errors} , reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
             
        }
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data)
        props.onUpdate(data)
      navigate("/admin/products")
        // bắn data ra ngoài app.js
        // redirect sang trang product
    } 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <div className="mb-3">
                  <label  className="form-label">Tên sản phẩm</label>
                  <input type="text" className="form-control"  placeholder='Ten san pham' {...register('name', {required: true})} />
              </div>
              <div className="mb-3">
                  <label className="form-label">Gía sản phẩm</label>
                  <input type="number" className="form-control" placeholder='Gia san pham'{...register("price")} />
              </div>
              <div className="mb-3">
                  <label className="form-label">image</label>
                  <input type="file" className="form-control" {...register("image")} />
              </div>
              
              <button type="submit" className="btn btn-primary">Update</button>
          </div>
    </form>

  )
}

export default ProductEdit