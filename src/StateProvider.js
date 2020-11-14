
import {createContext,useContext,userReducer} from "react";


//this is data layer
export const StateContext = createContext();

//provider building wrapping up entire app to this provider and giving access of whole project to this data layer

export const StateProvider =({reducer , initialState , children }) =>{
    <StateContext.Provider value={userReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext);