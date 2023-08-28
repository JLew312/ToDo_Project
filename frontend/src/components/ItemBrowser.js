import { useEffect, useState } from 'react';
import { useParams, Route, Routes, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DateDisplay from './DateDisplay';
import ItemDetailCard from './ItemDetailCard';
import AddItemForm from './AddItemForm';

import { getItems } from '../store/todoitem';

const ItemBrowser = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const [showDetail, setShowDetail] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const items = useSelector((state) => {
    return state.todoitem
  });
  // const item = useSelector((state) => state.todoitem[itemId]);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  // const handleClick = async (e) => {
  //   // e.preventDefault();

  //   dispatch(getItemDetails(item));
  //   console.log(item)
  // };

  let completed = [];
  let incomplete = [];
  const sortItemsByCompleteness = (items) => {
    (Object.values(items)).forEach(item => {
      item.completed === true ? completed.push(item) : incomplete.push(item);
    })
  };

  sortItemsByCompleteness(items);

  const sortItemsByDate = (items) => {
    let sorted = false;

    while(!sorted) {
      sorted = true;

      for (let i = 0; i < items.length - 1; i++) {
        if (new Date(items[i].startTime).valueOf() > new Date(items[i + 1].startTime).valueOf()) {
          let temp = items[i];
          items[i] = items[i + 1];
          items[i + 1] = temp;
          sorted = false;
        }
      }
    }
    return items;
  };

  sortItemsByDate(completed);
  sortItemsByDate(incomplete);

  return (
    <>
      <div className='header'>
        <DateDisplay/>
        <h3 className='items-ratio'>{`${completed.length} completed / ${(Object.values(items)).length - 1} total`}</h3>
      </div>
      <div>
        {incomplete.length === 0 ?
          <h4 style={{margin: 10}}>What are you doing today?</h4>
          :
          incomplete.map(item => (
            item.title &&
            <div>
              {showDetail ? (
                <ItemDetailCard />
              ) : (
                <div>
                  <input className='radio-btn' type="radio"/>
                  <NavLink style={{textDecoration: 'none'}} key={item.id} to={`/${item.id}`} onClick={() => setShowDetail(true)}>
                    <div className='item-box-closed'>
                      {/* THIS DIV HOLDS PLACE FOR RADIO BUTTON
                          THAT EXISTS OUTSIDE THIS DIV */}
                      <div></div>
                      <h3 key={item.title}>{item.title}</h3>
                      <h4>{new Date(item.startTime).toDateString()}</h4>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
        ))}
      </div>
      <button className='add-btn' onClick={() => setShowForm(true)}>+</button>
        {showForm ? (
          <div id='add-item-form'>
            <AddItemForm setShowForm={setShowForm}/>
          </div>
        ) : (
          // is this part necessary?
          <Routes>
            <Route element={<ItemDetailCard />}/>
          </Routes>
        )}
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
    </>
  );
}

export default ItemBrowser;
