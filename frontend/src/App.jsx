import './App.css'
import Homepage from './homepage/homepage'
import CategoryInfo from './Trademehome/Component/CategoryInfo'
import DollerReserv from './Trademehome/Component/DollerReserv'
import LinkImage from './Trademehome/Component/LinkImage'



function App() {

  return (
    <>
     <div className='layout-main-page'>
      <Homepage />
<LinkImage/>
<CategoryInfo/>
 
<DollerReserv/>


     </div>

       </>
  )
}

export default App

