import { useState, useReducer } from 'react'
import TabNavigationReducer from '../context/TabNavigationReducer'
import './Hello.css'

function Hello() {
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
    }
  }

  const [state, dispatch] =  useReducer(TabNavigationReducer, initialState)

  const pageOne = state.pages.page1
  const pageTwo = state.pages.page2
  const pageThree = state.pages.page3
  const pageFour = state.pages.page4
  const pageFive = state.pages.page5

  const pageOneLabel = state.pageLabels.page1
  const pageTwoLabel = state.pageLabels.page2
  const pageThreeLabel = state.pageLabels.page3
  const pageFourLabel = state.pageLabels.page4
  const pageFiveLabel = state.pageLabels.page5

  const handlePageChange = (page) => {
    dispatch({type: page})
  }

  return (
    <>
      <div className='page-container'>
        <div
          className={pageOne ? 'page-1 page-active' : 'page-1'}
          onClick={() => handlePageChange('PAGE1')}
        >
          <div className={pageOneLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageOneLabel ? 'page-label-text-active page-label-text-dark' : 'page-label-text page-label-text-dark'}>
              Hello
            </h3>
          </div>
        </div>
        <div
          className={pageTwo ? 'page-2 page-active' : 'page-2'}
          onClick={() => handlePageChange('PAGE2')}
        >
          <div className={pageTwoLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageTwoLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Projects
            </h3>
          </div>
        </div>
        <div
          className={pageThree ? 'page-3 page-active' : 'page-3'}
          onClick={() => handlePageChange('PAGE3')}
        >
          <div className={pageThreeLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageThreeLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Resume
            </h3>
          </div>
        </div>
        <div
          className={pageFour ? 'page-4 page-active' : 'page-4'}
          onClick={() => handlePageChange('PAGE4')}
        > 
          <div className={pageFourLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageFourLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Contact
            </h3>
          </div>
        </div>
        <div
          className={pageFive ? 'page-5 page-active' : 'page-5'}
          onClick={() => handlePageChange('PAGE5')}
        > 
          <div className={pageFiveLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageFiveLabel ? 'page-label-text-active page-label-text-dark' : 'page-label-text page-label-text-dark'}>
              About
            </h3>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Hello