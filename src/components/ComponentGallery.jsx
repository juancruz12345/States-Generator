import { motion } from "framer-motion";


function ComponentGallery({ components, onSelect, selected }) {
    return (
        <motion.div
         className="component-gallery"
         initial={{opacity:0,y:-10}}
         animate={{opacity:1,y:0}}
         exit={{opacity:1,y:10}}

         >
        {components.map((comp, idx) => (
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
  