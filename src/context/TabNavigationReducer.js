const TabNavigationReducer = (state, action) => {
  switch (action.type) {
    case 'PAGE1':
      return {
        pages: {
          page1: false,
          page2: true,
          page3: true,
          page4: true,
          page5: true,
        },
        pageLabels: {
          page1: false,
          page2: true,
          page3: true,
          page4: true,
          page5: true,
        }
      }
    case 'PAGE2':
      return {
        pages: {
          page1: false,
          page2: false,
          page3: true,
          page4: true,
          page5: true,
        },
        pageLabels: {
          page1: true,
          page2: false,
          page3: true,
          page4: true,
          page5: true,
        }
      }
    case 'PAGE3':
      return {
        pages: {
          page1: false,
          page2: false,
          page3: false,
          page4: true,
          page5: true,
        },
        pageLabels: {
          page1: true,
          page2: true,
          page3: false,
          page4: true,
          page5: true,
        }
      }
    case 'PAGE4':
      return {
        pages: {
          page1: false,
          page2: false,
          page3: false,
          page4: false,
          page5: true,
        },
        pageLabels: {
          page1: true,
          page2: true,
          page3: true,
          page4: false,
          page5: true,
        }
      }
    case 'PAGE5':
      return {
        pages: {
          page1: false,
          page2: false,
          page3: false,
          page4: false,
          page5: false,
        },
        pageLabels: {
          page1: true,
          page2: true,
          page3: true,
          page4: true,
          page5: false,
        }
      }
  }
}

export default TabNavigationReducer