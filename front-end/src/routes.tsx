import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/feed" element={<Feed />} /> */}
    </Routes>
)

export default Rotas