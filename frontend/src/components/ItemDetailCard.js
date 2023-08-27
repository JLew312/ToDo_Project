import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { getItemDetails } from '../store/todoitem';

const ItemDetailCard = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.todoitem[itemId]);

  console.log(item)

  const handleClick = () => {
    dispatch(getItemDetails(item))
  }

  return (
    <>
      <div>
        <div id="details-header">
          <h3 style={{margin: 10}}>{item.title}</h3>
          {item.completed === true ?
            <h4 id="comp-tag"  style={{color: "blue"}}>Completed</h4>
            :
            <h4 id="comp-tag" style={{color: "red"}}>Incomplete</h4>
          }
        </div>
        <div id="details-keys">
          <h4>Start: </h4>
          <p id="details-vals">{new Date(item.startTime).toDateString()} at {new Date(item.startTime).toLocaleTimeString()}</p>
        </div>
        <div id="details-keys">
          <h4>End: </h4>
          <p id="details-vals">{new Date(item.endTime).toDateString()} at {new Date(item.endTime).toLocaleTimeString()}</p>
        </div>
        <div id="details-keys">
          <h4>Where: </h4>
          <p id="details-vals">{item.where}</p>
        </div>
        <div id="details-keys">
          <h4>Reminder: </h4>
          <p id="details-vals">{item.reminder}</p>
        </div>
        <div id="details-keys">
          <h4>Repeat: </h4>
          <p id="details-vals">{item.repeat}</p>
        </div>
        <div id="details-keys">
          <h4>Notes: </h4>
          <p id="details-vals">{item.notes}</p>
        </div>
      </div>
    </>
  )
}

export default ItemDetailCard
