import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store/index';
import { UserStateType } from 'ts/user';

const initialState: UserStateType = {
  wallet: {
    address: '',
    starkPublicKey: '',
    uniqueId: null,
    referralCode: null,
    discordInviteCode: null
  },
  email: '',
  discordId: '',
  pqInviteCode: '',
  isDiscordConnected: false,
  consentCookies: false,
  error: { name: '', message: '' },
  isLoading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    bindWallet: (state) => {
      state.isLoading = true;
    },
    bindWalletSuccess: (state, action) => {
      state.wallet = {
        ...state.wallet,
        ...action.payload
      };
      state.isLoading = false;
    },
    bindWalletFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    resetWallet: (state) => {
      state.wallet = { ...initialState.wallet };
      state.email = initialState.email;
      state.discordId = initialState.discordId;
      state.isDiscordConnected = initialState.isDiscordConnected;
      state.pqInviteCode = initialState.pqInviteCode;
    },

    bindDiscord: (state, action) => {
      state.isLoading = !!action.payload;
    },
    bindDiscordSuccess: (state, action) => {
      state.isDiscordConnected = action.payload;
      state.isLoading = false;
    },
    bindDiscordFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getDiscordId: (state) => {
      state.isLoading = true;
    },
    getDiscordIdSuccess: (state, action) => {
      state.isLoading = false;
      state.discordId = action.payload;
    },
    getDiscordIdFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    bindWalletToEmail: (state) => {
      state.isLoading = true;
    },
    bindWalletToEmailSuccess: (state) => {
      state.isLoading = false;
    },
    bindWalletToEmailFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setPqInviteCode: (state, action) => {
      state.pqInviteCode = action.payload;
    },
    setConsent: (state) => {
      state.consentCookies = true;
    }
  }
});

export const selectHasWallet = (state: RootState) => !!state.user.wallet.address && !!state.user.wallet.uniqueId;

export const isPassportReady = (state: RootState) =>
  (!!state.user.wallet.address && !!state.user.wallet.uniqueId) ||
  (!!state.basicInfo.email && !!state.basicInfo.emailVerificationCode);

export const {
  bindWallet,
  bindWalletSuccess,
  bindWalletFail,
  resetWallet,

  bindDiscord,
  bindDiscordSuccess,
  bindDiscordFail,
  getDiscordId,
  getDiscordIdSuccess,
  getDiscordIdFail,

  bindWalletToEmail,
  bindWalletToEmailSuccess,
  bindWalletToEmailFail,

  setPqInviteCode,
  setConsent
} = userSlice.actions;
export default userSlice.reducer;
