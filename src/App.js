import LoginButton from "./loginButton";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Screens/Landing";
import MembersMain from "./Screens/MembersMain";

function App() {
  return  (
    <Router>
      
        <main>
          
            <Routes>
              <Route path='/' element={<Landing/>} exact />
              <Route path='/main' element={<MembersMain/>} exact />
            </Routes>
          
        </main>
      
    </Router>    
  );
}

export default App;
