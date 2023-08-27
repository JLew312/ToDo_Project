import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { getItemDetails } from '../store/todoitem';

const ItemDetailCard = () => {
  // const itemId = 2;
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.todoitem[itemId]);

  const handleClick = () => {
    dispatch(getItemDetails(item))
  }

  return (
    <>
      {/* <h1>hello</h1> */}
      {/* <button onClick={() => handleClick()}>I'M A BUTTON!</button> */}

    </>
  )
}

export default ItemDetailCard
