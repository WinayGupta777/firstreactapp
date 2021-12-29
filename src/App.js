// this is not function
// but this is Component
import ProductCatalogClass from "./components/classComponent";
import AddItem from "./components/addCounter";
import TodoComponent from "./components/TodoComponent";

import LifeCycle from "./components/lifeCycle";
import TodoApi from "./components/todoWithAPI";
const App=()=>{
  return(
    <>
      <TodoApi></TodoApi>
    </>
  )
}

//we have to export, so that index.js can import...!
export default App;