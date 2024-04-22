import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const initialState = {
    user: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};