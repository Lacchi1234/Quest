import {BrowserRouter,Routes,Route} from 'react-router-dom'

// import TestDashboard from './pages/TestDashboard'
import AdminResult from './pages/results/TestResults'
import AdminDashboard from './pages/admin/AdminDashboard'
import Candidate from './pages/Login/Candidate'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<TestDashboard/>}/> */}
          <Route path='/' element={<AdminResult/>}/>
          <Route path='/dash' element={<AdminDashboard/>}/>
          <Route path='/candidate' element={<Candidate/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
