import React from 'react'
import CustomerScene from './customer_scene/customer' //for test purpose
import SearchByActor from './customer_scene/search_by_actor' //for test purpose please remember to delete it after
import ShowResultMovie from './customer_scene/show_result_movie' // for test purpose
import AdminLayout from './admin_screne/AdminLayout'
import SearchResultMovie from './customer_scene/search_by_movie'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import Signin from './global/Signin'
import Signup from './global/Signup'

function App() {

  // const API_KEY = af939bc3061b33787b1038a1c4aa6731
  // const API_READ_ACCESS_TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjkzOWJjMzA2MWIzMzc4N2IxMDM4YTFjNGFhNjczMSIsIm5iZiI6MTczMTE0NDI2MC4wNDAzODI0LCJzdWIiOiI2NzJmMjk4ZjU5MDM2ZDJiY2YwOGU0YWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ljKwnHsieAhauRR49wlb8srxlAqQ2Lo8q9_jKaluVWY
  return (
    <div className='before:-scale-100'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomerScene />}/>
          <Route path='/actor' element={<SearchByActor />}/>
          <Route path='/searchResultMovie' element={<ShowResultMovie />}/>
          <Route path='/admin' element={<AdminLayout />}/>
          <Route path='/movie' element={<SearchResultMovie />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}






export default App