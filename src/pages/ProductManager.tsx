import React from 'react'
import { IProduct } from '../types/product'
import { Link } from 'react-router-dom';
type Props = {}
type ProductManagerProps = {
  products: IProduct[];
  onRemove: (id: number) => void
}
const ProductManager = (props: ProductManagerProps) => {
  console.log(props);
  
  return (
    
    <div>
      <button><Link to={`/admin/products/add`}>add</Link></button>
     <table className="table">
              <thead>
                <tr>
                  <th scope="col">stt</th>
                  <th scope="col">name</th>
                  <th scope="col">price</th>
                  <th scope="col"><i className="fa-solid fa-trash" /></th>
                  <th scope="col"><i className="fa-solid fa-eye-dropper" /></th>
                  
                </tr>
              </thead>
              <tbody>
                 {props.products.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><button onClick={() => props.onRemove(item?._id)}>Remove</button></td>
                    <td>
                    <button><Link to={`/admin/products/${item?._id}/edit`}>Edit</Link></button>
                    </td>
            </tr>
            
          })}
              </tbody>
      </table>


    </div>
    
  )
}


export default ProductManager