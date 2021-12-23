// this is not function
// but this is Component
import ProductCatalogClass from "./components/classComponent";
import AddItem from "./components/addCounter";
const App=()=>{
  return(
    <>
      <AddItem></AddItem>
    </>
  )
}

//we have to export, so that index.js can import...!
export default App;