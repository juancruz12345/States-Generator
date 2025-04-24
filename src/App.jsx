import { useState, useEffect } from 'react';
import ComponentGallery from './components/ComponentGallery';
import StateRenderer from './components/StateRender';
import { motion } from 'framer-motion';
import components from './components/components-library'
import './App.css'
import { UploadComponent } from './UploadComponent';
import QuickStart from './components/QuickStart';
import { Header } from './components/Header';


function App() {
  const [selectedComponent, setSelectedComponent] = useState(components[0])
  const [darkMode, setDarkMode] = useState(false)
  const [uploadedComponent, setUploadedComponent] = useState(null)
  const [section, setSection]= useState('galery')
  

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') setDarkMode(true)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])
 

  const handleSelect = (comp) => {
    setSelectedComponent(comp)
    setUploadedComponent(null)
  }

  return (
    <div className="app-container">
     <Header setSection={setSection} setDarkMode={setDarkMode} darkMode={darkMode}></Header>
     

     {
      section==='upload'
      && (<motion.div
         initial={{opacity:0,y:-10}}
         animate={{opacity:1,y:0}}
         exit={{opacity:1,y:10}}
          >
        <UploadComponent onComponentReady={(comp) => {
         setUploadedComponent(comp)
         setSelectedComponent(null)
       }} />
       {uploadedComponent && (
         <StateRenderer
           name={uploadedComponent.name}
           Component={uploadedComponent.Component}
           states={uploadedComponent.states}
           jsxCode={uploadedComponent.jsxCode}
           cssCode={uploadedComponent.cssCode}
         />
       )}
      </motion.div>)
     }

      

    
      
      {
        section==='galery'
     
      && (
        <>
      <ComponentGallery
          
          onSelect={handleSelect}
          selected={selectedComponent}
        />
        
        {selectedComponent && (
          <StateRenderer
          name={selectedComponent.name}
          Component={selectedComponent.Component}
          states={selectedComponent.states}
          jsxCode={selectedComponent.jsxCode}
          cssCode={selectedComponent.cssCode}
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
