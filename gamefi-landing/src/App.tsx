import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function AppRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="/dashboard">
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <div className="h-full w-screen bg-cover">
      <div className="h-full w-full ">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <div className="z-[60]">
          <Toaster
            containerStyle={{
              zIndex: 10000,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
