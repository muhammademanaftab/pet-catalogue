import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { ThemeProvider } from "./ThemeProvider";
import { Pets } from "./Pets";
import AddPet from "./AddPet";
import PetDetail from "./PetDetail";
import About from "./About";
import { Home } from "./Home";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/pets/new" element={<AddPet />} />
            <Route path="/pets/:id" element={<PetDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;