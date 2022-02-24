import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";

function App() {
const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

const [alert, setAlert] = useState(null); // Alert

const showAlert = (message, type)=> {
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
}
// Adding multi color panel on the navbar :
// const removeBodyClasses = ()=>{
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-success');
//   document.body.classList.remove('bg-dark');
//   document.body.classList.remove('bg-secondary');
//   document.body.classList.remove('bg-primary');
//   document.body.classList.remove('bg-danger');
// }
const toggleMode = (cls) => {
  // removeBodyClasses();
    // document.body.classLi`st.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
}
return (
    <> 
  <BrowserRouter>
  <Navbar about='Home' title='TextUtils' mode={mode} toggleMode = {toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
          <Route path="/about" element={<About />} />
          <Route path='/home' showAlert={showAlert} element={<TextForm heading={`Must Try TextUtils - Word counter, Character counter, Remove extra space`} mode={mode} />}/>
        </Routes>
  </div>
  </BrowserRouter>
  </> 
  );
}

export default App;
