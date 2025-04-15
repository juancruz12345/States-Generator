function TestComponent({ label, style }) {
    return <button style={style}>{label}</button>;
  }
  
  export default TestComponent;
  
  export const states = {
    Default: { label: "Click me" },
    Danger: { label: "Eliminar", style: { backgroundColor: "red", color: "white" } },
   
  };
  