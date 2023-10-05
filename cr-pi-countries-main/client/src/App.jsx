import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Detail from "./Views/Detail/Detail";
import Form from "./Views/Form/Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
        <Route path="/detail/:id" element={<Detail />}>
          Detail
        </Route>
        <Route path="/form" element={<Form />}>
          Form
        </Route>
      </Routes>
    </div>
  );
}

export default App;
