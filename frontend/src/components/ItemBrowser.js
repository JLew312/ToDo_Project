import { useEffect } from 'react';
import { useParams, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import sampleItems from './sampleItems';

import DateDisplay from './DateDisplay';
import ItemDetailCard from './ItemDetailCard';

import { getItems, getItemDetails } from '../store/todoitem';

const ItemBrowser = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.todoitem
  });
  const item = useSelector((state) => state.todoitem[itemId]);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleClick = async (e) => {
    // e.preventDefault();

    dispatch(getItemDetails(item));
    console.log(item)
  };

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
        {incomplete.length === 0 ?
          <h4 style={{margin: 10}}>What are you doing today?</h4>
          :
          incomplete.map(item => (
            <NavLink style={{textDecoration: 'none'}} key={item.id} to={`/${item.id}`} >
              <div className='item-box-closed'>
                <input className='radio-btn' type="radio" />
                <h3 key={item.title}>{item.title}</h3>
                <h4>{new Date(item.startTime).toDateString()}</h4>
              </div>
            </NavLink>
        ))}
      </div>
      <button className='add-btn'>+</button>
      <div className='space'></div>
      <h3 className='completed-label'>Completed</h3>
      <div>
        {completed.map(item => (
          <NavLink style={{textDecoration: 'none'}} key={item.id} to={`/${item.id}`} >
            <div className='item-box-closed-completed'>
              <input className='radio-btn-complete' type="radio" checked />
              <h3 key={item.title}>{item.title}</h3>
              <h4>{new Date(item.startTime).toDateString()}</h4>
            </div>
          </NavLink>
        ))}
      </div>
      <ItemDetailCard />
    </>
  );
}

export default ItemBrowser;
