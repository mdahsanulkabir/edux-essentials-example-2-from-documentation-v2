
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostsList from './features/posts/PostsList'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/"
            element={
              <PostsList />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App