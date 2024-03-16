import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer } from "react-toastify";
import Homepage from "./pages/Homepage";
import SignupSignIn from "./pages/SignupSignIn";
import Notfound from "./pages/Notfound";
import { PrivateRoute } from "./routes/PrivateRoute";
import MangaManagement from "./pages/MangaManagement";
import FormHandleManga from "./pages/FormHandleManga";

function App() {
  return <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignupSignIn />} />
        <Route path="/signup" element={<SignupSignIn />} />
        <Route path="/*" element={<Notfound />} />
        <Route
          path="/manga-management"
          element={
            <PrivateRoute>
              <MangaManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-manga"
          element={
            <PrivateRoute>
              <FormHandleManga />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-manga/:id"
          element={
            <PrivateRoute>
              <FormHandleManga />
            </PrivateRoute>
          }
        />
        <Route
          path="/delete-manga"
          element={
            <PrivateRoute>
              <FormHandleManga />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  </>
}

export default App;
