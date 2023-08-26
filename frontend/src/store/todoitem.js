const LOAD = 'todoitem/LOAD';

const load = list => ({
  type: LOAD,
  list
});

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
        list: action.list
      }
    default:
      return state;
  }
};

export default itemReducer;
