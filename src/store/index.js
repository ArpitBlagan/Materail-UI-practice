import {createSlice,configureStore} from "@reduxjs/toolkit";

const songsSlice=createSlice({
    name:"song",
    initialState:[],
    reducers:{
        addSong(state,action){
            //state inside these reducers
            //is peice of state which this reduces
            //is responsible for
            state.push(action.payload);
        },
        removeSong(state,action){
            const index=state.indexOf(action.payload);
            console.log(index);
            if(index>0){state.splice(index,1);}
        }
    }
});
const store=configureStore({
    reducer:{
        songs:songsSlice.reducer
    }
});
console.log(store.getState());
// store.dispatch({
//     type:"song/addSong",
//     payload:"New Song!!!"
// });
//addSong is not a mini reducer but it is a actoin creator same name as the mini reducer
//which take a payload and this function automatically create by reduxjs/toolkit for us in
//createSlice...
// store.dispatch(
//     songsSlice.actions.addSong("New Song")
// )
console.log(store.getState());

export {store};
export const {addSong}=songsSlice.actions;
export const {removeSong}=songsSlice.actions;