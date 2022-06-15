import TabNavigationMenu from './components/TabNavigationMenu'
import NotFound from './components/pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TabNavigationProvider } from './context/TabNavigationContext.js'

function App() {
  return (
    <>
      <TabNavigationProvider>
        <Router>
          <div>
            <Routes>
              <Route path='/' element={<TabNavigationMenu pageRoute='PAGE1' />} />
              <Route path='/projects' element={<TabNavigationMenu pageRoute='PAGE2'  />} />
              <Route path='/resume' element={<TabNavigationMenu pageRoute='PAGE3' />} />
              <Route path='/contact' element={<TabNavigationMenu pageRoute='PAGE4' />} />
              <Route path='/about' element={<TabNavigationMenu pageRoute='PAGE5' />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </TabNavigationProvider>
    </>
  );
}

export default App;
