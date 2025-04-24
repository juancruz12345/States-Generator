import './Badge.css';

function Badge({ children, type = 'info' }) {
  return (
    <span className={`badge badge-${type}`}>
      {children}
    </span>
  );
}

export default Badge;

export const states = {
  Info: { children: "Info", type: "info" },
  Warning: { children: "Advertencia", type: "warning" },
  Success: { children: "Éxito", type: "success" }
};
