import {  BrowserRouter as Router,  Routes,  Route,  Navigate,} from "react-router-dom";
import './App.css'
import Homepage from './homepage/homepage'

function App() {

  return (
    <>
     <div className='layout-main-page'>
      <Homepage />
     </div>
         <div>
           <Router>
             <Routes>
             <Route path="/" element={<Navigate to="/Home" />} /> */This is how I
             made App.jsx the home page /*
               <Route path="/homepage" Component={Homepage} />
               {/* <Route path="/Page_Options" Component={Page_Options} />
               <Route path="/Portfolio" Component={Portfolio} />
               <Route path="/Contact" Component={Contact} />
               <Route path="/content/:id" element={<Info_page />} /> */}
             </Routes>
           </Router>
         </div>
       </>
  )
}

export default App

