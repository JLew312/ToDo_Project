const LOAD = 'todoitem/LOAD';
const ADD_ONE = 'todoitem/ADD_ONE';
const DELETE_ONE = 'todoitem/DELETE_ONE';

const load = list => ({
  type: LOAD,
  list
});

const addSingleItem = item => ({
  type: ADD_ONE,
  item
});

const deleteSingleItem = (item) => ({
  type: DELETE_ONE,
  item
});

export const editSingleItem = (item) => async dispatch => {
  const res = await fetch(`/api/todo-items/${item.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(item)
  })

  if (res.ok) {
    const item = await res.json();
    dispatch(addSingleItem(item));
  }
};

export const deleteItem = (item) => async dispatch => {
  const res = await fetch(`/api/todo-items/${item.id}`, {
    method: 'DELETE'
  });

  if (res.ok) {
    dispatch(deleteSingleItem(item));
  }
};

export const addItem = item => async dispatch => {
  const res = await fetch('/api/todo-items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });

  if (res.ok) {
    const item = await res.json();
    dispatch(addSingleItem(item));
  }
};

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
    case DELETE_ONE:
      const newState = {
        ...state
      };

      const vals = Object.values(newState);

      for (let i = 0; i < vals.length - 1; i++) {
        let item = vals[i];
        if (item.id === action.item.id) delete newState[i]
      }
      return newState;
    default:
      return state;
  }
};

export default itemReducer;
