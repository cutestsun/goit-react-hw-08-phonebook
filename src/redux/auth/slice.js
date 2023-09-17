import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  updateAvatar,
} from './operations';
import {
  handleLogIn,
  handleLogOut,
  handleRefreshUser,
  handleRefreshUserPending,
  handleRefreshUserRejected,
  handleRegister,
  handleUpdateAvatar,
} from './handlers';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', avatar: '' },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegister)
      .addCase(logIn.fulfilled, handleLogIn)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.rejected, handleRefreshUserRejected)
      .addCase(updateAvatar.fulfilled, handleUpdateAvatar);
  },
});

export const authReducer = authSlice.reducer;
