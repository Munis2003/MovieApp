import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"lang",
    initialState:{
        changeLang: "english"
    },
    reducers:{
        changeLanguage:(state,action) => {
            state.changeLang = action.payload;
        }
    }
})

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;