import { createSlice } from "@reduxjs/toolkit";

const initialState = {packageList:[],fav:'',edit:[]}

export const npmSlice = createSlice({
    name: "NPM",
    initialState,
    reducers:{
        updatenpm: (state,action)=>{
            state.packageList = action.payload;
        },
        addFav: (state,action) => {
            if(state.fav){
                const data = state.fav.filter(item => item.name === action.payload.name)
                if(data.length < 1){
                    state.fav = [...state.fav,action.payload]
                }
                if(data.length > 0){
                    const Newdata = state.fav.filter(item => item.name !== action.payload.name)
                    state.fav = [...Newdata,action.payload]
                }
            }else{
                state.fav = [action.payload]
            }
        },
        addFromLocal:(state,action) => {
            if(Array.isArray(action.payload))
            state.fav = [...action.payload]
        },
        removeFav: (state,action) =>{
            const updatedFav = state.fav.filter(item => item.name !== action.payload.name)
            state.fav = updatedFav
        },
        editFav: (state,action) => {
            state.edit = [action.payload]
        }
    }
})

export const getData = (search) => {
    return async (dispatch) =>{
        
        const fetchData = async()=>{
           const response = await fetch(`https://api.npms.io/v2/search?q=${search}`);

           if(!response.ok){
            throw new Error("Data could not fetch");
           }
           const data = response.json();
           
           return data;
        }
        try {
            const product = await fetchData();
            dispatch(npmActions.updatenpm(product.results))
        } catch (error) {
            console.log(error);
        }
    }
}

export const npmActions = npmSlice.actions