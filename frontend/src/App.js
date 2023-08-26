// import { Route, Routes } from 'react-router-dom';
import sampleItems from './sampleItems';

import DateDisplay from './components/DateDisplay';
// import ItemTitleCard from './components/ItemTitleCard';

const App = () => {

  let completed = [];
  let incomplete = [];
  const sortItems = (items) => {
    sampleItems.forEach(item => {
      item.completed === true ? completed.push(item) : incomplete.push(item);
    })
  };

  sortItems(sampleItems);

  return (
    <>
      <div className='header'>
        <DateDisplay />
        <h3 className='items-ratio'>{`${completed.length} completed / ${sampleItems.length} total`}</h3>
      </div>
      <div>
        {incomplete.map(item => (
          <div className='item-box-closed'>
            <input type="radio" />
            <h3 key={item.title}>{item.title}</h3>
            <h4>{item.startTime.toDateString()}</h4>
          </div>
        ))}
      </div>
      <button className='add-btn'>+</button>
      <div className='space'></div>
      <h3 className='completed-label'>Completed</h3>
      <div>
        {completed.map(item => (
          <div className='item-box-closed-completed'>
            <input type="radio" />
            <h3 key={item.title}>{item.title}</h3>
            <h4>{item.startTime.toDateString()}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
