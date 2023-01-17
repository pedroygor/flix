import { Route, Routes } from "react-router-dom"
import { Film } from "./pages/Film"
import { Films } from "./pages/Films"
import { Home } from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Films />} />
      <Route path="/movies/:id" element={<Film />} />
    </Routes>
  )
}

export default App
