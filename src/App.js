import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Updated';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
      <Router>
        <div className="main">
          <div className="content">
            <h2 className="main-header">React Crud Operations</h2>
            <div>
              <Routes>
                <Route exact path='/' Component={Create} />
              </Routes>
              <Routes>
                <Route exact path='/read' Component={Read} />
              </Routes>
              <Routes>
                <Route exact path='/update' Component={Update} />
              </Routes>
              <Routes>
                <Route path="*" Component={NotFound} /> 
              </Routes>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
