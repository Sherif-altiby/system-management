import './App.scss'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AllItems from './components/AllItems/AllItems';
import SellItem from './components/SellItem/SellItem';
import AddItem from './components/AddItem/AddItem';
import MakeInvoice from './components/Invoices/MakeInvoice';
import Home from './components/Home/Home';


const App = () => {
  return (
    <div>
         <Router>
               <Routes>
                    <Route path='/' element={<Home />} >
                         <Route index element={<Dashboard />} />
                         <Route path='add-item' element={<AddItem />} />
                         <Route path='sell-item' element={<SellItem />} />
                         <Route path='products' element={<AllItems />} />
                         <Route path='invoice' element={<MakeInvoice />} />
                    </Route>
               </Routes>
         </Router>
    </div>
  )
}

export default App