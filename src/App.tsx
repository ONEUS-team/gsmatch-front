import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" />
        <Route path="/login" />
        <Route path="/" />
        <Route path="/request" />
        <Route path="/notice" />
        <Route path="/chat" />
        <Route path="/survey" />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
