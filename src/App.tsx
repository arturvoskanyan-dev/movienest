import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import {HomePage, GenrePage, FilmPage} from "./pages/index"
import './App.css'

function App() {

  return (
    <section className='max-w-[1920px] mx-auto'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/category/:id/:page' element={<GenrePage />} />
          <Route path='/film/:id' element={<FilmPage />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
