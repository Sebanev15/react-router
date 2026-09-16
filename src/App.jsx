import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import CountrieDetailPage from "./pages/CountrieDetailPage.jsx";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate replace to="/countries" />} />
        <Route path="/countries" element={<CountriesPage />}></Route>
        <Route path="/countries/:countrieId" element={<CountrieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
