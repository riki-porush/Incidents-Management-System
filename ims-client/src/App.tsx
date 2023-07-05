import React from 'react';


import { Provider } from 'react-redux';

import './App.css';
import LeftDrawer from './components/Drawer';


import counterSlice from "./redux/counterSlice"
import Examle from './componnents/examle';
import { configureStore } from '@reduxjs/toolkit';

const  myStore = configureStore({
  reducer:{
    counterSlice
  }
})
//
export type RootState = ReturnType<typeof myStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof myStore.dispatch
//
function App() {
  return (

    <Provider store={myStore}>
     <Examle></Examle>
       <LeftDrawer />
    </Provider>

  );
}

export default App;