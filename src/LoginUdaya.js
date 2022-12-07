import React ,{useState}from 'react'
import { json, useNavigate,Link } from 'react-router-dom';
import './Login.css'

function LoginUdaya() {
     const direct = useNavigate();

    let reg_pass=new RegExp('(^[A-Z]*[A-Z a-z 0-9]*[^A-z a-z 0-9]*[A-Z a-z 0-9]*[A-z a-z 0-9]*[A-Z]+[A-Z a-z 0-9]*[^A-z a-z 0-9]*[^A-z a-z 0-9]+[A-Z a-z 0-9]*[0-9]*[^A-Z a-z 0-9]*[A-Z a-z 0-9]*)$');
	let reg_mail=new RegExp('^[a-z 0-9]+@[a-z]+\\.[a-z]{2,3}$');

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        
        e.preventDefault();

        const getuserArr = localStorage.getItem("admin");
        console.log(getuserArr);

        const { email, password } = inpval;

        if(!(reg_mail.test(email))){
            alert("enter valid email")
        }
        else if(!(reg_pass.test(password))){
            alert("Password criteria didn't match")
        }
        else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    direct("/Feed")
                }
            }
        }
    }




  return (
    <div className='login'>
        <section>
            <div className='login__container'>

                
                <h2>facebook</h2>

                <form>

                <label>email</label>
                <input type="email" name='email' onChange={getdata} placeholder="Enter Your email" required/>
                       

                <label>password</label>
                <input type="password" name='password' onChange={getdata} placeholder="Enter pasword"  required/>

                <button onClick={addData} className="login__login" type="submit">
                   LOGIN
                </button> 

                </form>
                <div className="sideinfo">
                               
                <Link to="./Signup" style={{ textDecoration:'none'}}>
                <h5> SIgn up for facebook</h5>
                </Link>
                           
            </div>
            </div>

            
        </section>
    </div>
  )
}

export default LoginUdaya