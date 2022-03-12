import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ShowInfo from './components/Showinfo'

const root = document.querySelector('#root')

// const myName = "tuan";
// const myAge = 19;
// const myStatus = true;
// const myInfo = {
//   name : "tuan",
//   age:19,
//   status :true
// }
// function showInfo(props){
//   return <p>hello {props.name}</p>
// }
// const ShowInfo = (props) => {
//   return <p>hello {props.name}</p>
// }
ReactDOM.render(<div>
   {/* <div>{showInfo(myInfo)} </div> */}
   {/* <ShowInfo name="tuan"/> */}
   <App/>

</div>, root
    
);