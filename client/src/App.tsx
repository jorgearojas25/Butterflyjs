import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Form from "./pages/Form/Form"
import ThankYou from "./pages/ThankYou/ThankYou"
import { useDispatch } from "react-redux"
import {
  loadAllQuestions,
  loadCompany,
  loadMoods,
} from "./store/reducers/APIReducer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/mood/:id", element: <Form /> },
  { path: "/thanks", element: <ThankYou /> },
])

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(loadMoods() as any)
    dispatch(loadAllQuestions() as any)
    dispatch(loadCompany() as any)
  }, [dispatch])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
