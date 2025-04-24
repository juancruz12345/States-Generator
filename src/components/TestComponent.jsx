function TestComponent({ label, ...props }) {
    return <button {...props}>{label}</button>;
  }
  
  export default TestComponent;
  
  export const states = {
    Default: { label: "Click me",onClick:"(e) => alert('clicked')" },
    Danger: { label: "Eliminar", style: { backgroundColor: "red", color: "white" } },
   
  };
  