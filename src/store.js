import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    /* mutate를 할 땐 return 하지 않음!! */
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    /* 새로운 state를 원할 때는 return 사용!! */
    return state.filter(toDo => toDo.id !== action.payload);
  },
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
}

export default store;