import React from 'react'
// import App from '../App'
import 'bootstrap/dist/css/bootstrap.css';
import arrow from '../assets/arrow.png';
import styled from "styled-components";

const Container=styled.div`


    background-image: linear-gradient(to right, #ff5722, #ff9800);
   height: 948px;
    
    
    .register-left{
        margin-top: 200px;
    text-align: center;
    color:#fff;
    padding: 30px;
    }
    .register-left img{
    margin-top: 60px;
    margin-bottom: 18px;
    width: 80px;
    }
    .register-left p{
    padding: 20px 20px 0;
    }
    .register-left .btn-primary{
    border-radius: 1500px;
    border: none;
    width: 120px;
    background: #f8f8f8;
    font-weight: 600;
    color: #555;
    margin-top: 20px;
    padding: 10px;
    }
    .register-right{
        margin-top: 200px;
    border: none;
    background: #f8f8f8;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    padding: 50px;
    box-shadow: 20px 10px 10px rgb(78, 78, 76);
    }
    .register-right h2{
    text-align: center;
    margin-bottom: 10px;
    color: #555;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .register-form{
    padding: 10px;
    }
    .register-right .btn-primary{
    float :right;
    border-radius: 1500px;
    border: none;
    width: 120px;
    background: #ff9800;
    font-weight: 600;
    color: #fff;
    margin-top: 20px;
    padding: 10px;
    margin-right: 10px;
    }
    .form-group{
    padding: 10px;
    }
    .wrapper.two {
      font-size: 6rem;
      font-family: sans-serif;
  }
  .neon h3 {
      margin: 1rem auto;
      animation: neon 1s ease infinite;
  }
  @keyframes neon {
      0%,
      100% {
          text-shadow: 0 0 10px #ef00e3a8, 0 0 20px #ef00e3a8, 0 0 20px #ef00e3a8, 0 0 20px #ef00e3a8, 0 0 2px #fed128, 2px 2px 2px #806914;
          color: #f5efcb;
      }
      50% {
          text-shadow: 0 0 2px #800e0b, 0 0 5px #800e0b, 0 0 5px #800e0b, 0 0 5px #800e0b, 0 0 2px #800e0b, 4px 4px 2px #40340a;
          color: #eda0d3;
      }
  }
    
`;

export const Register = () => {
  return (
    <>
    <Container>
            <div className="container">
<div className="row">
<div className="col-md-10 offset=md-1">
<div className="row">
<div className="col-md-5 register-left">
<img src={arrow}/>
<h3>join us</h3>
       
<p>Subscribe Easy Tutorials Youtube Channel to watch more
videos</p>
<button type="button" className="btn btn-primary">About Us</button>
</div>
<div className="col-md-7 register-right">
<h2>Register Here</h2>
<div className="register-form"></div>
<div className="form-group">
  <input type="text" className="form-control" placeholder="Name"></input>
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Username"></input>
</div>
<div className="form-group">
<input type="email" className="form-control"placeholder="Email"></input>
</div>
<div className="form-group">
<input type="password" className="form-control"placeholder="Password"></input>
</div>
<button type="button" className="btn btn-primary">Register</button>
</div>
</div>
</div> 
</div>
    </div>
    </Container>

    </>
  )
}

export default Register