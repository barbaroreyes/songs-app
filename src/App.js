import React ,{useState,useEffect}from 'react'
import Form from './compononet/form'
import Allsongs from './compononet/allsongs'
import './App.css';

function App() {
  const [getAllS, setGetAll] = useState([])
  const url = 'https://qv3pmlupr4.execute-api.us-east-2.amazonaws.com/songs'

  const getAll = ()=>{
    fetch(url + '/songs/')
    .then((response)=> response.json())
    .then((data)=> {
      setGetAll(data.body)
      console.log('data',data)
    })
  }

   useEffect(()=>{
    getAll()
   },[])

  //  const handleCreate = (newSong)=> {
  //   fetch(url + '/songs/',{
  //     method : "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //    },
  //     body: JSON.stringify(newSong)
  //   })
  //   .then(()=> { getAll()})
  //   }
  return (
    <div className="App">
     <Form/>
     <Allsongs allSongs={getAllS}/>
    </div>
  );
}

export default App;
