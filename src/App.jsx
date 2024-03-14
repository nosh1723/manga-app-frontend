import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes";

function App() {
  return <Router>
    <div className="App">
      <Routes>
        {publicRoute.map((route, index) => {
          return <Route key={"route-" + index} path={route.path} element={<route.component />} />
        })}
      </Routes>
    </div>
  </Router>
}

export default App;
