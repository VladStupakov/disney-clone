import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
