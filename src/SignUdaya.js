import React ,{useState}from 'react'
import { ButtonGroup } from 'react-bootstrap';
import { json, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUdaya = () => {
    const direct=useNavigate();

    let reg_name=new RegExp('^[A-Za-z]+\\s?[a-zA-Z]*$');
	let reg_pass=new RegExp('(^[A-Z]*[A-Z a-z 0-9]*[^A-z a-z 0-9]*[A-Z a-z 0-9]*[A-z a-z 0-9]*[A-Z]+[A-Z a-z 0-9]*[^A-z a-z 0-9]*[^A-z a-z 0-9]+[A-Z a-z 0-9]*[0-9]*[^A-Z a-z 0-9]*[A-Z a-z 0-9]*)$');
	let reg_mail=new RegExp('^[a-z 0-9]+@[a-z]+\\.[a-z]{2,3}$');


    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword:""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const [errorMsg,setErrorMsg]=useState("")

    
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

        const { name, email, date, password ,confirmPassword} = inpval;

        if(!(reg_name.test(name))){
            alert("enter valid name")
        }
        else if(!(reg_mail.test(email))){
            alert("enter valid email")
        }
        else if(!(reg_pass.test(password))){
            alert("Password criteria didn't match")
        }
        else if(password !== confirmPassword)
        { 
            alert("password and confirm password did'nt match")
        }
        else{
            localStorage.setItem("admin",JSON.stringify([...data,inpval]));
            alert('you have created account successfully click ok to continue',{
                position: "top-center",
            })
            direct("/");
        }
    }


    

    return (
        <div>
            <section>
                <div>
                    <h3>
                        SIGN UP
                    </h3>
                    <form>

                       <label> username</label>
                       <input type="text" name='name' onChange={getdata} placeholder="Enter Your Name"  required/>
                       

                       <label>email</label>
                       <input type="email" name='email' onChange={getdata} placeholder="Enter Your email" required/>
                       

                       <label>password</label>
                       <input type="password" name='password' onChange={getdata} placeholder="Enter pasword"  required/>
                       
                       
                       <label>Confirm password</label>
                       <input type="password" name='confirmPassword' onChange={getdata} placeholder="confirm pasword"  required />
                      

                       <button className="submit_button" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                        Submit
                       </button> 

                    </form>
                </div>
            </section>
        </div>
    )
}

export default SignUdaya