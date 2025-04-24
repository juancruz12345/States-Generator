import { motion } from "framer-motion";
import components from './components-library'

function ComponentGallery({  onSelect, selected }) {

    const componentsOrderer = components.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
 
    return (
        <motion.div
         className="component-gallery"
         initial={{opacity:0,y:-10}}
         animate={{opacity:1,y:0}}
         exit={{opacity:1,y:10}}

         >
        {componentsOrderer.map((comp, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(comp)}
            className={`component-button ${
              comp.name === selected?.name ? 'active' : ''
            }`}
          >
            {comp.name}
          </button>
        ))}
      </motion.div>
      
    );
  }
  
  export default ComponentGallery;
  