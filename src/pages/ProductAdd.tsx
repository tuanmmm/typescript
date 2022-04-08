import axios from 'axios';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {}
type TypeInputs = {
    name: string,
    price: number,
    image:string

}
type ProductAddProps = {
    
    onAdd: (product: TypeInputs) => void
};

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();

    const onSubmit: SubmitHandler<TypeInputs> = (data) => {
        // props.onAdd(data);
        const file = data.image[0]
        const formData = new FormData();
        formData.append("file" , file);
        formData.append("upload_preset", "mrtuan")

        axios({
            method: "POST",
            url:"https://api.cloudinary.com/v1_1/asm-acma-06/image/upload",
            data: formData
        })
            .then((res)=> {
                data.image = res.data.url;
                props.onAdd(data);
            })

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <input type="text" placeholder='Ten san pham' {...register('name')} />
        <input type="number" placeholder='Gia san pham' {...register('price')} />
        <input type="file" placeholder='Ten san pham' {...register('image')} />
        <button>Add</button>
    </form>
  )
}


export default ProductAdd