import React,{useState} from 'react'

const Header = () => {

  const [login,setlogin]= useState("login")
  return (
    <div className='Nav-container'>
      <div className="Logo">Logo</div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className='login-btn' onClick={()=>{
           login === "login" ? setlogin("logout") : setlogin("login")
          }}>{login}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header