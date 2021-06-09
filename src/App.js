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
  const emptyS = {
    name: "",
    time: "",
    author: "",
  };
  const [selectedW,setSelectedW]= useState(emptyS)
   useEffect(()=>{
    getAll()
   },[])

   const handleCreate = (newSong)=> {
    fetch(url + '/songs/',{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
     },
      body: JSON.stringify(newSong)
    })
    .then(()=> { getAll()})
    }
    const selectFw = (song)=>{
      setSelectedW(song)
    }

    const handleUpdate = (song) => {
      fetch(url +'/songs/' + song._id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(song),
      }).then(() => getAll());
    };

    const handleDeleteW = (song)=> {
      fetch(url +'/sevenw/' + song._id, {
        method: "delete"
      })
      .then(() => {
        getAll()
      })
     }

  return (
    <div className="App">
     <Form 
     newS={emptyS}
     handleSubmit={handleCreate}
     />
     <Allsongs 
     allSongs={getAllS}
     selectFw={selectFw}
     handleDeleteW={handleDeleteW}
     handleUpdate={handleUpdate}
     />
    </div>
  );
}

export default App;
