import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import ProductPage from "./pages/ProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import CountryDetailPage from "./pages/CountryDetailPage.jsx";

function App() {
  return (
    <>
      <Header />
      {/* 👇 Here you can use Routes or Switch component, Routes match with the most
      specific route so the order doesn't matter  */}
      <Routes>
        {/* Ejercicio UT5.1.1: la ruta raíz redirige a /countries */}
        <Route path="/" element={<Navigate replace to="/countries" />} />

        {/* you can use 👇 character (* or wildcard) to any other route
        in combination with the Navigate component you can redirect the user to a default page */}
        <Route path="/*" element={<Navigate replace to="/welcome" />} />

        {/* You can compose the routes by wrapping the Route components  and using 
        the Outlet Component from React Router*/}
        <Route path="/welcome/*" element={<WelcomePage />}>
          <Route path="new-user" element={<p> Welcome, new user!</p>} />
          <Route
            path="to-outlet"
            element={<p> Welcome, to the outlet! 🛍️</p>}
          />
        </Route>

        {/* If composing routes doesn't looks clear for you, you always can define
        the whole 👇route and expect the router will match the most specific one */}
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />

        {/* Ejercicio UT5.1.1: lista y detalle de países usando countries.dev */}
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:cca2" element={<CountryDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
