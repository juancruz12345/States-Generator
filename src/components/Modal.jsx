import './Modal.css';
import { useState } from 'react';

function Modal({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className='btn-modal' onClick={() => setOpen(true)}>Mostrar</button>
      {open && (
        
        <div className="modal-overlay">
          <button className="close-button" onClick={() => setOpen(false)}>×</button>
          <div className="modal">
            {children}
          </div>
        </div>
       
      )}
     
    </>
  );
}

export default Modal;

export const states = {
  Open: { children: "Este es un modal con botón cerrar" }
};
