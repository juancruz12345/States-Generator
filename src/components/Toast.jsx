import './Toast.css';
import { useState, useEffect } from 'react';

function Toast({ message, type = 'info', duration, position = 'top-center', ...props }) {
  
    const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    
    if(duration>0){
    
    const hideTimer = setTimeout(() => setVisible(false), duration)
    return () => {
        
        clearTimeout(hideTimer)
    }
}
    
  },[visible])

  

  return (
    <div>

       <div><button onClick={() => setVisible(true)}>Mostrar Toast</button></div>
   
      {
        visible ?
            <div className={`toast-container ${position}`} {...props}>
            <div
              className={`toast toast-${type}`}
              
            >
              <span className="toast-message">{message}</span>
              <button className="toast-close" onClick={() => setVisible(false)}>×</button>
            </div>
          </div>
        : <></>

      }
    </div>
  );
}

export default Toast;

export const states = {
  TopStart: { message: "Mensaje arriba a la izquierda", type: "info", position: "top-start", duration:5000 },
  TopCenter: { message: "Mensaje centrado arriba", type: "success", position: "top-center" },
  BottomEnd: { message: "Abajo a la derecha", type: "error", position: "bottom-end" },
  Center: { message: "Centrado en pantalla", type: "warning", position: "center" }
};
