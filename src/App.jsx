import './App.scss'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomDrawer from './components/Drawer/CustomDrawer';
import Dashboard from './components/Dashboard/Dashboard';
import AillItems from './components/AllItems/AillItems';
import SellItem from './components/SellItem/SellItem';
import AddItem from './components/AddItem/AddItem';
import MakeInvoice from './components/Invoices/MakeInvoice';


const App = () => {
  return (
    <div>
         <Router>
               <Routes>
                    <Route path='/' element={<CustomDrawer />} >
                         <Route index element={<Dashboard />} />
                         <Route path='add-item' element={<AddItem />} />
                         <Route path='sell-item' element={<SellItem />} />
                         <Route path='products' element={<AillItems />} />
                         <Route path='invoice' element={<MakeInvoice />} />
                    </Route>
               </Routes>
         </Router>
    </div>
  )
}

export default App