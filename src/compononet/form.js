import React ,{useState}from 'react'

const Form = (props) => {
const [formData, setFormData] = useState(props.newS)

const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
     //Push back to display page
     props.history.push("/")
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
             name='name'
             value={formData.name}
             onChange={handleChange}
             placeholder='song-name'
            />
            <input 
            type="text"
            name='time'
             value={formData.time}
             onChange={handleChange}
             placeholder='time'
             />
              <textarea 
            type="text"
            name='author'
             value={formData.author}
             onChange={handleChange}
             placeholder='author'
             />
             <input type="submit" value={props.label} />

        </form>
       
    )
}

export default Form
