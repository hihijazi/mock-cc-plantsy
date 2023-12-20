import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;


// hierarchy 
// plantPage - GrandParent 
// plantList - Child 
// plantCard - grandchild 

// Mock Code Challenge started 11:00 
// Del 1 When the app starts, I can see all plants. 
// done 11:23

// Del 2 I can add a new plant to the page by submitting the form.
// done 11:45

// Del 3 I can mark a plant as "sold out"
// done 11:53

// Del 4 I can search for plants by their name and see a filtered list of plants.
// done 12:05 
