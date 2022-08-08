
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Sidemenu } from './components/SideMenu'
import { TrendsForyou } from './components/TrendsForYou'
import { Home } from './page/Home'
import { ProfilePage } from './page/ProfilePage'
import { SingleTweetPage } from './page/SingleTweetPage'

function App() {

  return (
    <div className="App">
      <Sidemenu />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='singletweet' element={<SingleTweetPage />} />
      </Routes>
      <TrendsForyou />
    </div>
  )
}

export default App
