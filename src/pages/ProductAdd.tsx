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
          <div>
              <div className="mb-3">
                  <label  className="form-label">Tên sản phẩm</label>
                  <input type="text" className="form-control"  placeholder='Ten san pham' {...register('name')} />
              </div>
              <div className="mb-3">
                  <label className="form-label">Gía sản phẩm</label>
                  <input type="number" className="form-control" placeholder='Gia san pham' {...register('price')}  />
              </div>
              <div className="mb-3">
                  <label className="form-label">image</label>
                  <input type="file" className="form-control" {...register('image')} />
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
          </div>
    </form>
  )
}


export default ProductAdd