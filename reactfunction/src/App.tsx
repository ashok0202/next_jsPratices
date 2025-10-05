import './App.css'
import Componet1 from './components/componet1'
import Products from './components/context-with-reducer/products'
import Hooksfunction from './components/hooksfunction'
import ProductReducer from './components/productreducer'
import Button from './components/propdriling/button'

function App() {


  return (
    <>
     <h1 className='font-bold '>Helloo Controller</h1>
     <Componet1 />
     <Hooksfunction/>
     <ProductReducer />
     <h1 className='font-bold'>Prop Drilling </h1>
     <Button  />
     <h1 className="font-[700] text-red-500 p-10">Cart context using UseReducer</h1>
     <Products/>
    </>
  )
}

export default App
