
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { NotFound } from './components/NotFound';
import { List } from './pages/List/List';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/list/:gender" element={<List />} />
      </Routes>

    </div>
  )
}

export default App
