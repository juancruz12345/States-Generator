import './Input.css'

export function Input({ placeholder = 'Escribí algo', error, type }) {
    return (
      <input
        key={type} type={type}
        className={`input ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
      />
    );
  }
  