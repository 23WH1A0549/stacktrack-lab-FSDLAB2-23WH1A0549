import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;