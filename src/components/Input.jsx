import './Input.css';

function Input({style,children,...props}) {
  //const {type = 'text', style } = props;
  return <div><input key='text'
  className="input"
  
  style={style}
  {...props}/></div>;
}

export default Input;

export const states = {
  Default: { placeholder: "Escribí algo" },
  Disabled: { placeholder: "No editable", disabled: true },
  Number: { placeholder: "Elegí un número", type: "number" },
  Error: {
    placeholder: "Error",
    style: { backgroundColor: "#ffe6e6", borderColor: "#dc3545" }
  }
};
