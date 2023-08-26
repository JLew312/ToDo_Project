import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import sampleItems from './sampleItems';

import DateDisplay from './components/DateDisplay';

import { getItems } from './store/todoitem';

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.todoitem
  });

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  let completed = [];
  let incomplete = [];
  const sortItems = (items) => {
    (Object.values(items)).forEach(item => {
      item.completed === true ? completed.push(item) : incomplete.push(item);
    })
  };

  sortItems(items);

  return (
    <>
      <div className='header'>
        <DateDisplay />
        <h3 className='items-ratio'>{`${completed.length} completed / ${(Object.values(items)).length} total`}</h3>
      </div>
      <div>
        {incomplete.map(item => (
          <div className='item-box-closed'>
            <input className='radio-btn' type="radio" />
            <h3 key={item.title}>{item.title}</h3>
            <h4>{new Date(item.startTime).toDateString()}</h4>
          </div>
        ))}
      </div>
      <button className='add-btn'>+</button>
      <div className='space'></div>
      <h3 className='completed-label'>Completed</h3>
      <div>
        {completed.map(item => (
          <div className='item-box-closed-completed'>
            <input className='radio-btn-complete' type="radio" checked />
            <h3 key={item.title}>{item.title}</h3>
            <h4>{new Date(item.startTime).toDateString()}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
