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
    price : number
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
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <input type="text"  {...register('name', {required: true})}/>
    <input type="number"  {...register("price")} />
    <button>Update</button>
  </form>
  )
}

export default ProductEdit