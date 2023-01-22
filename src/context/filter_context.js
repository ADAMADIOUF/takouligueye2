import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filtered_products: [],
  all_products: [],
  
  filters: {
    text: '',
    
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    
  }, [products,  state.filters])
  
  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  
  return (
    <FilterContext.Provider
      value={{
        ...state,
        
        updateFilters,
       
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
