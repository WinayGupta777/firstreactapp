// this is not function
// but this is Component
import ProductCatalogClass from "./components/classComponent";
const App=()=>{
  return(
    <>
      <ProductCatalogClass></ProductCatalogClass>
    </>
  )
}

//we have to export, so that index.js can import...!
export default App;