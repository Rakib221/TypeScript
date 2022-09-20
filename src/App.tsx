import GlobalContext from './Components/Hook/GlobalContext';
import React, { createContext, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TypeScriptPractice from './Components/TypeScriptPractice';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar';
// import Home from './Components/Home';
// import Essay from './Components/Essay';
// import Comments from './Components/Comments';
import Hello from './Components/Hello';
import Children from './Components/Children';
import ReactNodeElement from './Components/ReactNodeElement';
import Container from './Components/Container';
import RefForwarded from './Components/ForwarededRef/RefForwarded';
import AssignElement from './Components/OperationToward/AssignElement';
import PassClassAsProps from './Components/Style/PassClassAsProps';
import ModalParen from './Components/CreateModalWithPortal/ModalParen';
import PProfiler from './Components/PracticeProfiler/PProfiler';
import MousePosition from './Components/RenderComponent/MousePosition';
const AboutComponent = React.lazy(() => import("./Components/About"));
const Home = React.lazy(() => import("./Components/Home"));
const Essay = React.lazy(() => import("./Components/Essay"));
const Comments = React.lazy(() => import("./Components/Comments"));

function App() {

  const propsForStyles = {
    kind:"styleForButton",
    price:32
  }

  return (
    // <GlobalContext.Provider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Suspense fallback="Loading...">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutComponent />} />
            <Route path="operations" element={<TypeScriptPractice practice={"practice"} />}>
              <Route path="essay" element={<Essay practice={"practice"} />} />
              <Route path="comments" element={<Comments />} />
              {/* <Route index element={<Essay/>} /> */}
            </Route>
            {/* </Route> */}
          </Routes>
        </Suspense>
        <Hello title={"Hello world"}></Hello>
        <Children>Children</Children>
        <ReactNodeElement><strong>React node Element</strong></ReactNodeElement>
        <Container>
          <h1>my heading</h1>
        </Container>
        <RefForwarded></RefForwarded>
        <AssignElement value = {2}></AssignElement>
        <PassClassAsProps {...propsForStyles}></PassClassAsProps>
        <ModalParen></ModalParen>
        <PProfiler></PProfiler>
        <MousePosition></MousePosition>
      </BrowserRouter>
    // </GlobalContext.Provider>
  );
}

export default App;
