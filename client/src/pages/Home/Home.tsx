import React from "react"

const Home: React.FC = () => {
  React.useEffect(() => {
    const sayHello = async () => {
      //! The path should be in a configure file
      const response = await fetch("/api/company")
      const body = await response.json()
      console.log(body)
    }
    sayHello()
  }, [])
  return <div>Home</div>
}

export default Home
