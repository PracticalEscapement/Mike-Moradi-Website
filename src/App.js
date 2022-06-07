import Hello from './components/Hello'
import { TabNavigationProvider } from './context/TabNavigationContext.js'

function App() {
  return (
    <>
      <TabNavigationProvider>
        <Hello />
      </TabNavigationProvider>
    </>
  );
}

export default App;
