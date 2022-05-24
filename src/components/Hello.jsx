import { useState, useReducer } from 'react'
import TabNavigationReducer from '../context/TabNavigationReducer'
import './Hello.css'

function Hello() {
  const initialState = {
    pages: {
      page1: false,
      page2: true,
      page3: true,
      page4: true,
      page5: true,
    }
  }

  const [state, dispatch] =  useReducer(TabNavigationReducer, initialState)

  const pageOne = state.pages.page1
  const pageTwo = state.pages.page2
  const pageThree = state.pages.page3
  const pageFour = state.pages.page4
  const pageFive = state.pages.page5

  return (
    <>
      <div className='page-container'>
        <div
          className={!pageOne ? 'page-1' : 'page-1 page-active'}
          onClick={() => dispatch({ type: 'PAGE1'})}
        >
          <div className='page-label'>
            <h3 className='page-label-text page-label-text-1'>Hello</h3>
          </div>
        </div>
        <div
          className={!pageTwo ? 'page-2' : 'page-2 page-active'}
          onClick={() => dispatch({ type: 'PAGE2'})}
        >
          <div className='page-label'>
            <h3 className='page-label-text page-label-text-2'>Projects</h3>
          </div>
        </div>
        <div
          className={!pageThree ? 'page-3' : 'page-3 page-active'}
          onClick={() => dispatch({ type: 'PAGE3'})}
        >
          <div className='page-label'>
            <h3 className='page-label-text page-label-text-3'>Resume</h3>
          </div>
        </div>
        <div
          className={!pageFour ? 'page-4' : 'page-4 page-active'}
          onClick={() => dispatch({ type: 'PAGE4'})}
        > 
          <div className='page-label'>
            <h3 className='page-label-text page-label-text-4'>Contact</h3>
          </div>
        </div>
        <div
          className={!pageFive ? 'page-5' : 'page-5 page-active'}
          onClick={() => dispatch({ type: 'PAGE5'})}
        > 
          <div className='page-label'>
            <h3 className='page-label-text page-label-text-5'>About</h3>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Hello