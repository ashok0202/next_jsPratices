import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Provider } from "react-redux"
import  store  from "../slice/store"

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Provider>
    </>
  )
}

export default RootLayout
