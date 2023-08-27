const LOAD = 'todoitem/LOAD';
const ADD_ONE = 'todoitem/ADD_ONE';

const load = list => ({
  type: LOAD,
  list
});

const addSingleItem = item => ({
  type: ADD_ONE,
  item
});

export const getItemDetails = item => async dispatch => {
  const res = await fetch(`/api/todo-items/${item.id}`);

  if (res.ok) {
    const item = await res.json();
    dispatch(addSingleItem(item));
  }
};

export const getItems = () => async dispatch => {
  const res = await fetch(`/api/todo-items`);

  if (res.ok) {
    const list = await res.json();
    dispatch(load(list));
  }
};

const initialState = {
  list: []
}

const itemReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD:
      const allItems = {};
      action.list.Items.forEach(item => {
        allItems[item.id] = item;
      });
      return {
        ...allItems,
        ...state,
        // is below necessary??
        // list: action.list
      };
    case ADD_ONE:
      if (!state[action.item.id]) {
        const newState = {
          ...state,
          [action.item.id]: action.item
        };
        const itemList = newState.list.map(id => newState[id]);
        itemList.push(action.item);
        return newState
      }
      return {
        ...state,
        [action.item.id]: {
          ...state[action.item.id],
          ...action.item
        }
      }
    default:
      return state;
  }
};

export default itemReducer;
