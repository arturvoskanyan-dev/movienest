import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import {HomePage} from "./components/index"
import './App.css'

function App() {

  return (
    <section className='max-w-[1920px] mx-auto'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
