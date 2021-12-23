// this is not function
// but this is Component
import ProductCatalogClass from "./components/classComponent";
const App=()=>{
  return(
    <>
      <ProductCatalogClass  imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"  price="30"></ProductCatalogClass>
      <ProductCatalogClass  imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg"  price="50"></ProductCatalogClass>
    </>
  )
}

//we have to export, so that index.js can import...!
export default App;