import { useEffect } from 'react';
import './App.css';
 // import DeveloperData from './components/DeveloperData';
import DeveloperForm from './components/DeveloperForm';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  
  
  useEffect(() => {
  
  }, []);
  return (
    <div className="App">
      <Header/>
      <DeveloperForm />
       <Footer />
    </div>
  );
}

export default App;
