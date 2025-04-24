import './Tooltip.css';

function Tooltip({ label, position = 'top', children }) {
  return (
    <div className={`tooltip-wrapper tooltip-${position}`}>
      {children}
      <span className="tooltip">{label}</span>
    </div>
  );
}

export default Tooltip;

export const states = {
  Top: { label: "Tooltip arriba", position: 'top', children: "🖱 Hover" },
  Bottom: { label: "Tooltip abajo", position: 'bottom', children: "🖱 Hover" },
  Right: { label: "Tooltip a la derecha", position: 'right', children: "🖱 Hover" },
  Left: { label: "Tooltip a la izquierda", position: 'left', children: "🖱 Hover" }
};
