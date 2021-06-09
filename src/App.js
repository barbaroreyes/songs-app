import React ,{useState,useEffect}from 'react'
import Form from './compononet/form'
import Allsongs from './compononet/allsongs'
import {Switch,Route,Link} from 'react-router-dom'
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

    const handleUpdate = (songId) => {
      console.log("songId",songId)
      fetch(url +'/songs/' + songId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(songId),
      }).then(() => getAll());
    };

    const handleDeleteW = (songId)=> {
      console.log('song',songId)
      fetch(url +'/songs/' + songId, {
        method: "delete"
      })
      .then(() => {
        getAll()
        console.log('delete')
      })
     }

  return (
    <div className="App">
       <h1>SONGS LISTING SITE</h1>
      <hr />
      <Link to='/create'>
        <button>Add Song</button>
      </Link>
      <Switch>
        <Route 
         exact
          path ='/'
           render={(rp) =>(
             <Allsongs {...rp}
             allSongs={getAllS}
             selectFw={selectFw}
        handleDeleteW={handleDeleteW}
        handleUpdate={handleUpdate}
             />
           )}
         

         />
        />
      <Form 
     newS={emptyS}
     handleSubmit={handleCreate}
     />
     <Allsongs 
     
     selectFw={selectFw}
     handleDeleteW={handleDeleteW}
     handleUpdate={handleUpdate}
     />
      </Switch>
    
    </div>
  );
}

export default App;
