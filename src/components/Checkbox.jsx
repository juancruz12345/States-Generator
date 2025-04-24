import { useState } from 'react';
import './Checkbox.css';

function Checkbox({ checked = false, label = '', children, ...props }) {

  const [check, setCheck] = useState(checked)
  const handleSelect = () => {
    setCheck(prev=>!prev)
    console.log(check)
  }

  
  return (
    <label className="checkbox" >
      <input type="checkbox" checked={check} {...props} value={check} onClick={handleSelect} readOnly/>
      <span className="checkmark" />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;

export const states = {
  Default: { label: "Estoy de acuerdo" },
  Checked: { label: "Aceptado", checked: true, disabled:true },
  Unchecked: { label: "No aceptado", checked: false, disabled:true }
};
