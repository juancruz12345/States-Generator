function TestComponent({ label, style, onClickFunction }) {
    return <button onClick={onClickFunction} style={style}>{label}</button>;
  }
  
  export default TestComponent;
  
  export const states = {
    Default: { label: "Click me",onClickFunction:"(e) => console.log('clicked')" },
    Danger: { label: "Eliminar", style: { backgroundColor: "red", color: "white" } },
   
  };
  