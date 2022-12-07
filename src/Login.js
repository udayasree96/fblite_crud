
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "./App.css";
import Form from "./Form";
import React,{useState} from "react";
let reg_pass=new RegExp('(^[A-Z]*[A-Z a-z 0-9]*[^A-z a-z 0-9]*[A-Z a-z 0-9]*[A-z a-z 0-9]*[A-Z]+[A-Z a-z 0-9]*[^A-z a-z 0-9]*[^A-z a-z 0-9]+[A-Z a-z 0-9]*[0-9]*[^A-Z a-z 0-9]*[A-Z a-z 0-9]*)$');
let reg_mail=new RegExp('^[a-z 0-9]+@[a-z]+\\.[a-z]{2,3}$');
const Login=()=>
{

   let direct=useNavigate();
    const [data,setData]=useState({   
		
		username:{value:'',isValid:false,type:''},
		password:{value:'',isValid:false,type:''},
		confirmpassword:{value:'',isValid:false,type:''},
		email:{value:'',isValid:false,type:''},
	})

    const {username,password,confirmpassword,email,checkbox}=data;
    const changeHandler=(name,val,err,type)=>{

        console.log("name:-"+name);
        console.log("value:-"+val);
        console.log("error:-"+err);
        console.log("type:-"+type);
        setData({
            ...data,
            [name]:{
                ...data.name,isValid:err,value:val,type:type
            }
        });			
}
const buttonallow=()=>{

    if(password.isValid && email.isValid)
    {
        return false;
        
        
    }
    else
    {
        return true;

    }

}


    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Hello");
        console.log(email.value);
        console.log(JSON.parse(localStorage.getItem(email.value)).pwd);
        let pass=JSON.parse(localStorage.getItem(email.value)).pwd
        if(pass==null || pass!=password.value)
        {
           alert("Invalid Credentials");
        }
        else
        {
            direct("/Feed" );
        }
        
        
    }

    return(
        <div  className="login">
                <img  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login__logo" />
                <div className="login__container">
                    <form  onSubmit={submitHandler} >
                        <center>
                            <Form type="email" name="email" onSubmit={changeHandler}   placeholder="Enter email" value={email.value}  id="mail" regx={reg_mail} ></Form>
                        </center>
                        <center>
                            <Form type="password" name="password" onSubmit={changeHandler}   placeholder="Enter Password" value={password.value}  id="pass" regx={reg_pass} ></Form>
                        </center>
                        <center>
                            <button type="submit" className="login__login"  disabled={buttonallow()}>
                                Log In
                            </button>
                        </center>
                        <center>
                            <div className="sideinfo">
                               
                                    <Link to="./Signup" style={{ textDecoration:'none'}}>
                                        <h5> SIgn up for facebook</h5>
                                    </Link>
                                
                            </div>
                        </center>
                    </form>
                </div>
        </div>
    )
}
export default Login;