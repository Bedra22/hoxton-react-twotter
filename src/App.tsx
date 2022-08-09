
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Sidemenu } from './components/SideMenu'
import { TrendsForyou } from './components/TrendsForYou'
import { EachTweetPage } from './page/EachTweetPage'
import { Error } from './page/Error'
import { Home } from './page/Home'
import { ProfilePage } from './page/ProfilePage'

function App() {

  return (
    <div className="App">
      <Sidemenu />
      <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home/:id' element={<EachTweetPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <TrendsForyou />
    </div>
  )
}

export default App
