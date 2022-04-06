
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {}
type TypeInputs = {
    name: string,
    price: number
}
type ProductAddProps = {
    
    onAdd: (product: TypeInputs) => void
};

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        props.onAdd(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <input type="text" placeholder='Ten san pham' {...register('name')} />
        <input type="number" placeholder='Gia san pham' {...register('price')} />
        <button>Add</button>
    </form>
  )
}


export default ProductAdd