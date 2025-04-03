import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'


const Rotas = () => {

    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed /> } />
    </Routes>
    )
}
export default Rotas