import { Header } from "./components/Header";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import {Home} from "./components/Home"
import {Counter} from "./components/Counter"
import { Welcome } from "./components/Welcome";
import { CounterClass } from "./components/CounterClass";
import Props from "./components/Props";
import Parent from "./components/Parent";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/header' element={<> <Header/ >  <CounterClass/>  </>} />
        <Route path='/' element={<> < Counter/ > < Welcome /> <CounterClass/> <Parent /> </>}/>
        <Route path='/Props' element={<> <Props name="shivani"/> </>}/>
        <Route path='/parent' element={<Parent />} />
        <Route path='/Layout' element ={<Layout/>}/>


      </Routes>
      
      </BrowserRouter>
      

      
    </div>
  );
}

export default App;
