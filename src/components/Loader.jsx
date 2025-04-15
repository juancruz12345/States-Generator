import './Loader.css'

export function Loader({ size = 32 }) {
    return (
      <div
        className="spinner"
        style={{ width: size, height: size, borderWidth: size / 8, display:'flex', margin:'0 auto' }}
      />
    );
  }
  