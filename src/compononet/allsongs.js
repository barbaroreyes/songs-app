import React from 'react'

const Display = ({allSongs,selectFw,handleDeleteW}) => {
 console.log('allSongs',allSongs)
  const loaded = () =>{
    return(
        <div className="songs">
          {allSongs.map((item,i)=>{
            return (<div className='single' key={i}>
              <h3>{item.name}</h3>
                 <p>{item.time}</p>
                 <p>{item.author}</p>
                 <button onClick={() =>{
                   selectFw(item)
                  //  history.push("/edit")
                   }}>Edit</button>
               <button onClick={() =>{handleDeleteW(item)}}>Delete</button>

              </div>)
          })}
        </div>

    )
    
  }
  const loading = () =><>Loading...</>
  return allSongs ? loaded():loading();
}

export default Display
