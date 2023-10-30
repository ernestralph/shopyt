import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService';
import {toast} from "react-toastify"


const initialState = {
 isLoggedIn : false,
 user: null,
 isError: false,
 isSuccess: false,
 isLoading: false,
 message: ''
}
// register user
export const register = createAsyncThunk(
 'auth/register',
 async (userData, thunkApi) =>{
  try {
   return await authService.register(userData);
  }catch(error){
   const message = (
    error.response &&
    error.response.data &&
    error.response.data.message) ||
    error.message ||
    error.toString();
    return thunkApi.rejectWithValue(message);
  }
 }
);
// login user
export const login = createAsyncThunk(
 'auth/login',
 async (userData, thunkApi) =>{
  try {
   return await authService.login(userData);
  }catch(error){
   const message = (
    error.response &&
    error.response.data &&
    error.response.data.message) ||
    error.message ||
    error.toString();
    return thunkApi.rejectWithValue(message);
  }
 }
);

// logout user
export const logout = createAsyncThunk(
 'auth/logout',
 async (_, thunkApi) =>{
  try {
   return await authService.logout();
  }catch(error){
   const message = (
    error.response &&
    error.response.data &&
    error.response.data.message) ||
    error.message ||
    error.toString();
    return thunkApi.rejectWithValue(message);
  }
 }
);

// get login status
export const getLoginStatus = createAsyncThunk(
 'auth/getLoginStatus',
 async (_, thunkApi) =>{
  try {
   return await authService.getLoginStatus();
  }catch(error){
   const message = (
    error.response &&
    error.response.data &&
    error.response.data.message) ||
    error.message ||
    error.toString();
    return thunkApi.rejectWithValue(message);
  }
 }
);
// get User
export const getUser = createAsyncThunk(
 'auth/getUser',
 async (_, thunkApi) =>{
  try {
   return await authService.getUser();
  }catch(error){
   const message = (
    error.response &&
    error.response.data &&
    error.response.data.message) ||
    error.message ||
    error.toString();
    return thunkApi.rejectWithValue(message);
  }
 }
);
// updateUser
export const updateUser = createAsyncThunk(
 'auth/updateUser',
 async (userData, thunkApi) =>{
  try {
   return await authService.updateUser(userData);
  }catch(error){
   const message = (
    error.response &&
    error.response.data &&
    error.response.data.message) ||
    error.message ||
    error.toString();
    return thunkApi.rejectWithValue(message);
  }
 }
);
// updateUserPhoto
export const updatePhoto = createAsyncThunk(
 'auth/updatePhoto',
 async (userData, thunkApi) =>{
  try {
   return await authService.updatePhoto(userData);
  }catch(error){
   const message = (
    error.response &&
    error.response.data &&
    error.response.data.message) ||
    error.message ||
    error.toString();
    return thunkApi.rejectWithValue(message);
  }
 }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   ResetAuth(state){
    state.isError = false;
    state.isSuccess = false;
    state.isLoading = false;
    state.message = '';
   },
   SetIsLoading(state){
    state.isLoading = true;
   }
  },
  extraReducers:(builder) => {
   builder
   // register user
   .addCase(register.pending, (state)=>{
    state.isLoading = true;
   })
   .addCase(register.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.isSuccess = true;
    state.isLoggedIn = true;
    state.user = action.payload;
    toast.success("Registration Successful")
   })
   .addCase(register.rejected, (state, action)=>{
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    state.user = null;
    toast.error(action.payload)
   })
   // login user
   .addCase(login.pending, (state)=>{
    state.isLoading = true;
   })
   .addCase(login.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.isSuccess = true;
    state.isLoggedIn = true;
    state.user = action.payload;
    toast.success("LogIn Successfully");
   })
   .addCase(login.rejected, (state, action)=>{
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    toast.error(action.payload)
   })
   // logout user
   .addCase(logout.pending, (state)=>{
    state.isLoading = true;
   })
   .addCase(logout.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.isSuccess = true;
    state.isLoggedIn = false;
    state.user = null;
    toast.success(action.payload)
   })
   .addCase(logout.rejected, (state, action)=>{
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    toast.error(action.payload)
   })
   // get login status
   .addCase(getLoginStatus.pending, (state)=>{
    state.isLoading = true;
   })
   .addCase(getLoginStatus.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.isSuccess = true;
    state.isLoggedIn = action.payload;
    if(action.payload.message === "Invalid signature"){
      state.isLoggedIn = false;
    }
   })
   .addCase(getLoginStatus.rejected, (state, action)=>{
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
   })
   // getUser
   .addCase(getUser.pending, (state)=>{
    state.isLoading = true;
   })
   .addCase(getUser.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.isSuccess = true;
    state.isLoggedIn = true;
    state.user = action.payload
   })
   .addCase(getUser.rejected, (state, action)=>{
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    toast.error(action.payload)
   })
   // updateUser 
   .addCase(updateUser.pending, (state)=>{
    state.isLoading = true;
   })
   .addCase(updateUser.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.isSuccess = true;
    state.isLoggedIn = true;
    state.user = action.payload;
    toast.success("User updated");
   })
   .addCase(updateUser.rejected, (state, action)=>{
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    toast.error(action.payload)
   })
   // updatePhoto
   .addCase(updatePhoto.pending, (state)=>{
    state.isLoading = true;
   })
   .addCase(updatePhoto.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.isSuccess = true;
    state.isLoggedIn = true;
    state.user = action.payload;
    toast.success("User photo updated");
   })
   .addCase(updatePhoto.rejected, (state, action)=>{
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    toast.error(action.payload)
   })
  }
});

export const {ResetAuth, SetIsLoading} = authSlice.actions

export default authSlice.reducer