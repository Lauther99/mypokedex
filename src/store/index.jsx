import { configureStore } from '@reduxjs/toolkit';
import changeName from './slices/userName.slice'

export default configureStore({
    reducer: {
        userName: changeName,

    }
});