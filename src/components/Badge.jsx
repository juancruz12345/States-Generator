import './Badge.css';

function Badge({ children, type = 'info',...props }) {
  return (
    <span className={`badge badge-${type}`} {...props}>
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
