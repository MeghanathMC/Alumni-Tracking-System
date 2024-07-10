// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Mock authentication
//     const userData = { email };
//     login(userData);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React ,{useState} from "react";
import axios from "axios";
const Login = () => {
  const [formData,setFormData]=useState({
    username:"",
    email:"",
    password:""
  });


  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response =await axios.post("htpps://localhost:5000/api/login",formData);
      console.log(response.data);

    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" name="username" placeholder="Username" value={formData.username}
        onChange={handleChange} required/>
       <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" id=""  placeholder="Password" value={formData.password} onChange={handleChange} required/>
      <button type="submit">login</button>
      </form>
     
      
    </div>
  );
};

export default Login;
