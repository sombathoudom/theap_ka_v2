import { Route, Routes } from "react-router-dom";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import { lazy } from "react";
import "./index.css";
// import Home4 from "./pages/Home4";

const Home4 = lazy(() => import("./pages/Home4"));

function App() {
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname !== "/") {
  //     navigate("/");
  //   }
  // }, []);

  return (
    // <AnimatePresence mode="wait">
    //   <Routes location={location} key={location.pathname}>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/d" element={<Home2 />} />
    //     <Route path="/invitation" element={<Invitation />} />
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>
    // </AnimatePresence>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/d" element={<Home2 />} />
      <Route path="/dw" element={<Home3 />} />
      <Route path="/dn" element={<Home4 />} />
      {/* <Route path="/invitation" element={<Invitation />} />
      <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}

export default App;
