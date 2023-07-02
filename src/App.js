import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Settings />}/>
        <Route path='/questions' element={<Questions />}/>
        <Route path='/score' element={<FinalScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
