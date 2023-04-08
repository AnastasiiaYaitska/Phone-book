import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsDefault from '../components/contacts';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import { persistReducer } from 'redux-persist';
import { fetchContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: contactsDefault, isLoading: false, error: null },

  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );
