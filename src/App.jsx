import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import CountrieDetailPage from "./pages/CountrieDetailPage.jsx";
import {ThemeProvider} from "./context/ThemeContext.jsx";
function App() {
  return (
    <>
      <ThemeProvider>
          <Header />
          {/* 👇 Here you can use Routes or Switch component, Routes match with the most
      specific route so the order doesn't matter  */}
          <Routes>
              {/* you can use 👇 character (* or wildcard) to any other route
        in combination with the Navigate component you can redirect the user to a default page */}
              <Route path="/*" element={<Navigate replace to="/countries" />} />

              {/* You can compose the routes by wrapping the Route components  and using
        the Outlet Component from React Router*/}
              <Route path="/countries" element={<CountriesPage />}></Route>

              {/* If composing routes doesn't looks clear for you, you always can define
        the whole 👇route and expect the router will match the most specific one */}
              <Route path="/countries/:countrieId" element={<CountrieDetailPage />} />
          </Routes>
      </ThemeProvider>

    </>
  );
}

export default App;