import './Alert.css';

function Alert({ children, ...props }) {
  return (
    <div className="alert-container" {...props}>
      {children}
    </div>
  );
}

export default Alert;

export const states = {
  Default: {
  children: "Alert content"
},
  Success: {
  children: "Datos enviados",
  style:{  
    backgroundColor: "#d1e7dd",
    color: "#0f5132"
    }
},
  Error: {
  children: "Hubo un error",
  style:{  
  backgroundColor: "#f8d7da",
  color: "#842029"
  }
}
};
