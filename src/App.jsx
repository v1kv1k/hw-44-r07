import { AppProvider, useAppContext } from './context/AppContext';
import UserSection from './components/UserSection';
import ThemeToggle from './components/ThemeToggle';

function AppContent() {
  const { theme } = useAppContext();
  
  return (
    <div className={`container theme-${theme}`}>
      <h1>React Context Demo</h1>
      <p>This app demonstrates using React Context for managing global state.</p>
      
      <ThemeToggle />
      <UserSection />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App; 