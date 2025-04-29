import './Tag.css';

function Tag({ active = false, children, ...props }) {
  return (
    <span className={`tag ${active ? 'active' : 'inactive'}`} {...props}>
      {active ? 'Activo' : 'Inactivo'}
    </span>
  );
}

export default Tag;

export const states = {
  Active: { active: true },
  Inactive: { active: false }
};
