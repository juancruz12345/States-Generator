import './Tag.css';

function Tag({ active = false }) {
  return (
    <span className={`tag ${active ? 'active' : 'inactive'}`}>
      {active ? 'Activo' : 'Inactivo'}
    </span>
  );
}

export default Tag;

export const states = {
  Active: { active: true },
  Inactive: { active: false }
};
