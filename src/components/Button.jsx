import './Button.css';

function Button({ children,disabled, ...props }) {



  return (
    <button {...props} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;

export const states = {
  
  Primary: {
  children: "Enviar",
  
},
Loading: { children: 'Enviando...', style:{backgroundColor: "#6c757d",
  cursor: "progress"} },
Disabled: { children: 'Enviar', disabled:true },
Error: { children: 'Error', style:{backgroundColor: "#dc3545"} },
Success: { children: 'Listo', style:{backgroundColor: "#28a745"} },
};
