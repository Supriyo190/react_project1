import "./App.css";
import Header from "./components/header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


import DeleteIcon from '@mui/icons-material/Delete';



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[data, setData] = useState([]);

  const adddata = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  

  return (
    <div className="App">
      <Header />

      <div className="form">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic"
          label="name"
          variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <Button  onClick={adddata} variant="contained">add</Button>
      </div>


      {/* data  */}
      <div className="data">
        <div className="data_val">
          <h4>name</h4>
          <h4>email</h4>
          <h4>remove  </h4>
        </div>
        {
          data.map((item, index) =>
             {
            return(
               <div key={index} className="data_val">
          <h4>{item.name}</h4>
          <h4>{item.email}</h4>
          <Button onClick={() => removeItem(index)} variant="contained" color="error">
  <DeleteIcon />
</Button>
        </div>
                  )
            })
        }
      </div>
    </div>
  );
}

export default App;
