import "./App.css";
// import About from './components/About';
import React, { lazy, Suspense } from "react";

function App() {
  const About = lazy(() => import("./components/About"));
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </>
  );
}

export default App;
