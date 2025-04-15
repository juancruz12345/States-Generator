import { useState, useEffect } from 'react';
import ComponentGallery from './components/ComponentGallery';
import StateRenderer from './components/StateRender';
import {components} from './data/exampleComponents';
import './App.css'
import { UploadComponent } from './UploadComponent';
import QuickStart from './components/QuickStart';
import { Header } from './components/Header';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(components[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [uploadedComponent, setUploadedComponent] = useState(null);
  const [section, setSection]= useState('galery')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') setDarkMode(true);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);
 

  const handleSelect = (comp) => {
    setSelectedComponent(comp);
    setUploadedComponent(null); // Deselect uploaded component if switching
  };

  return (
    <div className="app-container">
     <Header setSection={setSection} setDarkMode={setDarkMode} darkMode={darkMode}></Header>
     

     {
      section==='upload'
      && (<div>
        <UploadComponent onComponentReady={(comp) => {
         setUploadedComponent(comp);
         setSelectedComponent(null); // Deselect gallery component if uploading
       }} />
       {uploadedComponent && (
         <StateRenderer
           name={uploadedComponent.name}
           Component={uploadedComponent.Component}
           states={uploadedComponent.states}
         />
       )}
      </div>)
     }

      

    
      
      {
        section==='galery'
     
      && (
        <>
        <ComponentGallery
          components={components}
          onSelect={handleSelect}
          selected={selectedComponent}
        />
        {selectedComponent && (
          <StateRenderer
            name={selectedComponent.name}
            Component={selectedComponent.Component}
            states={selectedComponent.states}
          />
        )}
      </>
      )
      }

        
     
     {
      section==='guide' && (
        <QuickStart></QuickStart>
      )
     }
    </div>
  );
}

export default App;
