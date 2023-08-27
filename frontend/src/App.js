import { Route, Routes } from 'react-router-dom';

import ItemBrowser from './components/ItemBrowser';
import ItemDetailCard from './components/ItemDetailCard';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<ItemBrowser />} />
        <Route path='/:itemId' exact element={<ItemDetailCard />} />
      </Routes>
    </>
  )
};

export default App;
