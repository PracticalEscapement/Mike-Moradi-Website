import { createContext, useReducer } from 'react'
import TabNavigationReducer from './TabNavigationReducer'

const TabNavigationContext = createContext()

export const TabNavigationProvider = ({ children }) => {
  const initialState = {
    pages: {
      page1: true,
      page2: false,
      page3: false,
      page4: false,
      page5: false,
    },
    pageLabels: {
      page1: true,
      page2: false,
      page3: false,
      page4: false,
      page5: false,
    },
  }

  const [state, dispatch] = useReducer(TabNavigationReducer, initialState)

  return (
    <TabNavigationContext.Provider
    value={{
      ...state,
      dispatch,
    }}>
      {children}
    </TabNavigationContext.Provider>
  )
}

export default TabNavigationContext