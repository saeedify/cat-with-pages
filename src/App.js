import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";

import { Query, QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  const clientxyz = new QueryClient( {
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false,
      },
    },
  } );

  return (
    <div className="App">

      <QueryClientProvider client={clientxyz}>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </Router>
      </QueryClientProvider>

    </div>
  );
}

export default App;
