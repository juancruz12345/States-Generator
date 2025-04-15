function ComponentGallery({ components, onSelect, selected }) {
    return (
        <div className="component-gallery">
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
      </div>
      
    );
  }
  
  export default ComponentGallery;
  