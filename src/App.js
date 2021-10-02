
import { useState } from 'react';
import './App.css';

const App = () => {
const data={
  name:"",
  password:"",
  email:"",
  mobile:"",
  address:''
}

const [formData,setFormData]=useState(data)

const handleChange = (e) => {
  console.log(e);
  setFormData({ ...formData, [e.target.name]: e.target.value });
}

  return (
    <div className="App">
      <header className="App-header">
        <h3>Form controll</h3>
        <form>
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="enter your name"
            value={formData.name}
            onChange={(e) => {handleChange(e)}}
          />
          <br />
          <input
            autoComplete="off"
            type="text"
            name="password"
            placeholder="enter your password"
            value={formData.password}
            onChange={(e) => {handleChange(e)}}
          />
          <br />
          <input
            autoComplete="off"
            type="email"
            name="email"
            placeholder="enter your email"
            value={formData.email}
            onChange={(e) => {handleChange(e)}}
          />
          <br />
          <input
            autoComplete="off"
            type="text"
            name="mobile"
            placeholder="enter your mobile"
            value={formData.mobile}
            onChange={(e) => {handleChange(e)}}
          />
          <br />
          <input
            autoComplete="off"
            type="text"
            name="address"
            placeholder="enter your adress"
            value={formData.address}
            onChange={(e) => {handleChange(e)}}
          />
          <br />
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
