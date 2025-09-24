import { Header } from "./components/Header";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import {Home} from "./components/Home"
import {Counter} from "./components/Counter"
import { Welcome } from "./components/Welcome";
import { CounterClass } from "./components/CounterClass";
import Props from "./components/Props";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/header' element={<> <Header/ >  <CounterClass/>  </>} />
        <Route path='/' element={<> < Counter/ > < Welcome /> <CounterClass/>  </>}/>
        <Route path='/Props' element={<> <Props name="shivani"/> </>}/>

      </Routes>
      
      </BrowserRouter>
      

      
    </div>
  );
}

export default App;
