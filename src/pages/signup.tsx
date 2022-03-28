import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (   
  <form >   
        <div><h1>đăng kí</h1></div>     
        <input type="email" placeholder='email'/> <br />
        <input type="password" placeholder='password'  /> <br />
        <button>đăng kí</button>
</form>
  )
}

export default Signup