import "./App.css";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<UserList />} />
      <Route path='/details' element={<UserDetail />} />
    </Routes>
  );
}
