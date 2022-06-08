import Hello from './components/Hello'
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
              <Route path='/' element={<Hello pageRoute='PAGE1' />} />
              <Route path='/projects' element={<Hello pageRoute='PAGE2'  />} />
              <Route path='/resume' element={<Hello pageRoute='PAGE3' />} />
              <Route path='/contact' element={<Hello pageRoute='PAGE4' />} />
              <Route path='/about' element={<Hello pageRoute='PAGE5' />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </TabNavigationProvider>
    </>
  );
}

export default App;
