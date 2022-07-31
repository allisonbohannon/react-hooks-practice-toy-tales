import React, {useState} from "react";

function ToyForm({onNewToy}) {

  const [formData, setFormData] = useState({
    name:'', 
    image:'', 
    id:''
  })
  function handleNameChange(event) {
    setFormData({
      ...formData,
    name: event.target.value })
  }

  function handleImageChange(event) {
    setFormData({
      ...formData, 
      image: event.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    const newToyObject = {
      name: formData.name, 
      image: formData.image, 
      id: Math.ceiling(Math.random())
    }
    
    fetch(`http://localhost:3001/toys`, {
      method: 'POST', 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(newToyObject)
    })
    .then(response => response.json())
    .then(data => onNewToy(data))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNameChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImageChange}
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
