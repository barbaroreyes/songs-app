import React ,{useState}from 'react'

const Form = (props) => {
const [form, setForm] = useState()
    return (
        <form>
            <input  
            type="text" 
            name="name"
             />
              <input  
            type="text" 
            name="author"
             />
              <input  
            type="text" 
            name="time"
             />
        </form>
    )
}

export default Form
