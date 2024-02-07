import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {Home} from "./pages/Home";
import { Profile } from './pages/Profile';
import { QueryClient, QueryClientProvider} from "@tanstack/react-query"


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link><br></br>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>  
    </div>
  );
}


export default App;
