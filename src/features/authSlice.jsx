import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
  name:"auth",

  initialState:{
    loading:false,
    error: false,
    currentUser:null,
    isAdmin:null,
    token:null,
  },


  reducers: {
    fethchStart: (state)=>{
        state.loading = true;
        state.error = false;
    },

    loginSuccess: (state, {payload})=> {
        state.loading= false;
        state.error=false;
        state.currentUser = payload?.user?.username;
        state.isAdmin = payload?.user.is_superuser;
        state.token = payload?.key;
    },

    logoutSuccess: (state)=>{
        state.loading=false;
        state.error= false;
        state.currentUser=null;
        state.isAdmin=null;
        state.token=null;
    },

    registerSuccess: (state, {payload})=>{
        state.loading=false;
        state.error=false;
        state.currentUser = payload?.username;
        state.token= payload?.token;
    },

    fetchFail: (state)=>{
        state.loading=false;
        state.error=true;
    }
  }
});




export const {fethchStart, fetchFail , registerSuccess, logoutSuccess, loginSuccess} = authSlice.actions

export default authSlice.reducer