import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(data => setToyList(data))
  },[])

  function handleLike(id) {
    const updatedToys = toyList.map(toy => {
      if (toy.id === id) {
        return {...toy, likes: toy.likes + 1}
      } else {return toy}
    })
    setToyList(updatedToys); 
  }

  function handleDonate(id) {
    const updatedToys = toyList.filter(toy => {return toy.id !== id})
    setToyList(updatedToys); 
  } 

  const displayToys = toyList.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onLike={handleLike} onDonate={handleDonate} />
  })

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
