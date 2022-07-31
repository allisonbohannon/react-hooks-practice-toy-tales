import React from "react";

function ToyCard({ toy, onLike, onDonate }) {

  const {id, name, image, likes} = toy

  function handleLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH', 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify({likes: likes + 1})}
    )
    .then(response => response.json())
    .then(onLike(id))
  };

  function handleDonate() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(onDonate(id)); 
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
