import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Contactlisting from "./Contactlisting";
import ManagerCreate from "./ManagerCreate";
import ManagerDetails from "./ManagerDetails";
import ManagerEdit from "./ManagerEdit";

function App() {
  return (
    <div className='App'>
      <h1>Contact Manager App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contactlisting />}>
          </Route>
          <Route path="/manager/create" element={<ManagerCreate />}>
          </Route>
          <Route path="/manager/detail/:mid" element={<ManagerDetails />}>
          </Route>
          <Route path="/manager/edit/:mid" element={<ManagerEdit />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
