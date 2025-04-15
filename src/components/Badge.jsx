import './Badge.css'

export function Badge({ text = 'Nuevo', variant = 'info' }) {
    return <span className={`badge badge-${variant}`}>{text}</span>;
  }
  