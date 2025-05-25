import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { ThemeProvider } from "./ThemeProvider";
import Login from "./Login";
import { Register } from "./Register";
import { ProtectedRoute } from "./ProtectedRoute";
import { Pets } from "./Pets";
import AddPet from "./AddPet";
import PetDetail from "./PetDetail";
import About from "./About";
import Profile  from "./Profile";
import { Home } from "./Home";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/pets"
              element={
                <ProtectedRoute>
                  <Pets />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pets/new"
              element={
                <ProtectedRoute>
                  <AddPet />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pets/:id"
              element={
                <ProtectedRoute>
                  <PetDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;