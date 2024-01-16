import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchTest = createAsyncThunk(
  'test/fetchTest',
  async () => {
    try {
      const returned = await AsyncStorage.getItem('test')
      if(returned !== null){
        return returned
      }
    } catch(e) {
      console.log("error fetching: ", e)
    }
  } 
)

export const setTest = createAsyncThunk(
    'test/setTest',
    async () => {
      try{
        await AsyncStorage.setItem('test', 'rabbit')
      } catch (e) {
        console.log("error setting: ", e)
      }
    }
  )

  export const deleteTest = createAsyncThunk(
    'test/deleteTest',
    async () => {
      try{
        await AsyncStorage.removeItem('test')
      } catch (e) {
        console.log('error removing: ', e)
      }
    }
  )

const testSlice = createSlice({
  name: 'test',
  initialState: {
    localStorage: ''
  },
  reducers: {
    testRoute: () => {
      console.log('dispatched')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTest.fulfilled, (state, action) => {
      state.localStorage = action.payload
    })
    builder.addCase(setTest.fulfilled, (state) => {
      state.localStorage = 'added'
    })
    builder.addCase(deleteTest.fulfilled), (state) => {
      state.localStorage = 'deleted'
    }
  }
})

export const { testRoute } = testSlice.actions

export default testSlice.reducer