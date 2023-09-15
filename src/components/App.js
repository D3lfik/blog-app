import React from 'react';
import {BrowserRouter as  Router , Route , Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';

function App() {
  return (
    <div className="container">
        <Navbar/>
        <Router>
          <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route exact path='/post/:postId' element={<PostDetail/>}/>
          <Route exact path='/create-post' element={<CreatePost/>}/>
          </Routes>
         </Router>

        Starting React blog
      </div>
  
  );
}

export default App;