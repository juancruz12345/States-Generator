import './Switch.css';
import { useState } from 'react';

function Switch({children,...props}) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="switch">
      <input {...props} type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span className="slider" />
    </label>
  );
}

export default Switch;

export const states = {
  Default: {}
};
