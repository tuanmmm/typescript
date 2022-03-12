import { useState } from 'react'
import './App.css'
import ShowInfo from './components/Showinfo'
function App() {
  const [count,setCount] = useState(0);
  const [products, setProducts] = useState([
         {id: 1, name: "Product A"},
         {id: 2, name: "Product B"},
         {id: 3, name: "Product C"},
    ]); 
  return (   
    <div>
      Count : {count} <button onClick={() => setCount(count +1)}>click</button>
      <button onClick={() => setCount(count -1)}>click giảm</button>
      {products.map((item,index) => <div key={index}>{item.name}</div>)}
        <ShowInfo name="tuan" />
    </div>
  )
}

export default App
