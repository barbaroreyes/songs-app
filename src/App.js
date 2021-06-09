import React ,{useState,useEffect}from 'react'
import Form from './compononet/form'
import './App.css';

function App() {
  const [get, setGetAll] = useState([])
  const url = 'https://qv3pmlupr4.execute-api.us-east-2.amazonaws.com/songs'
  const getAll = ()=>{
    fetch(url + '/songs/')
    .then((response)=> response.json())
    .then(data=> {
      setGetAll(data)
      console.log(data)
    })
  }

   useEffect(()=>{
    getAll()
   },[])

   const handleCreate = (newDog)=> {
    fetch(url + '/songs/',{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
     },
      body: JSON.stringify(newDog)
    })
    .then(()=> { getAll()})
    }
  return (
    <div className="App">
     <Form/>
    </div>
  );
}

export default App;
