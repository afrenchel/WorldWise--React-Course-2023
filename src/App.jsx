import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Product from "./pages/Product";
import PricingPage from "./pages/PricingPage";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

//components
import Form from "./components/Form";
import City from "./components/City";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />

            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* default route */}

              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />

              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
