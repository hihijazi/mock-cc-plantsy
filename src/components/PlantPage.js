import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const API = "http://localhost:6001/plants";
function PlantPage() {
  const [ plants, setPlants] = useState ([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() =>{
    fetch(API)
    .then(res => res.json())
    .then(setPlants)
  }, [])

  console.log(plants);

const onHandlingSubmit = (newPlant) =>{
  setPlants([...plants, newPlant])
}
const onHandleSearch = (searchValue) =>{
  setSearchTerm(searchValue)
}
console.log(searchTerm);

const displayedPlants = plants.filter((plant) => {
  return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
})

  return (
    <main>
      <NewPlantForm API={API} onHandlingSubmit={onHandlingSubmit}/>
      <Search searchTerm={searchTerm} onHandleSearch={onHandleSearch}/>
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
