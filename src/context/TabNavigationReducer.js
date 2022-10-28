const TabNavigationReducer = (state, action) => {
  switch (action.type) {
    case 'PAGE1':
      return {
        ...state,
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
    case 'PAGE2':
      return {
        ...state,
        pages: {
          page1: true,
          page2: true,
          page3: false,
          page4: false,
          page5: false,
        },
        pageLabels: {
          page1: false,
          page2: true,
          page3: false,
          page4: false,
          page5: false,
        }
      }
    case 'PAGE3':
      return {
        ...state,
        pages: {
          page1: true,
          page2: true,
          page3: true,
          page4: false,
          page5: false,
        },
        pageLabels: {
          page1: false,
          page2: false,
          page3: true,
          page4: false,
          page5: false,
        }
      }
    case 'PAGE4':
      return {
        ...state,
        menuColor: 'menu-color-light',
        pages: {
          page1: true,
          page2: true,
          page3: true,
          page4: true,
          page5: false,
        },
        pageLabels: {
          page1: false,
          page2: false,
          page3: false,
          page4: true,
          page5: false,
        }
      }
    case 'PAGE5':
      return {
        ...state,
        pages: {
          page1: true,
          page2: true,
          page3: true,
          page4: true,
          page5: true,
        },
        pageLabels: {
          page1: false,
          page2: false,
          page3: false,
          page4: false,
          page5: true,
        }
      }
    case 'MENU':
      return {
        ...state,
        menuColor: null,
        pages: {
          page1: false,
          page2: false,
          page3: false,
          page4: false,
          page5: false,
        },
        pageLabels: {
          page1: false,
          page2: false,
          page3: false,
          page4: false,
          page5: false,
        }
      }
    default:
      return state
  }
}

export default TabNavigationReducer