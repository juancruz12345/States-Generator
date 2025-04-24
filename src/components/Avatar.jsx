import './Avatar.css';

function Avatar({name, status }) {
  return (
    <div className="avatar">
      <img src={'./placeholder.jpg'} alt={name} className="avatar-img"/>
      <div className="avatar-info">
        <span className="avatar-name">{name}</span>
        {status && <span className="avatar-status">{status}</span>}
      </div>
    </div>
  );
}

export default Avatar;

export const states = {
  Default: {
    
    name: 'Nombre Usuario',
    status: 'En línea'
  },
  SinEstado: {
    
    name: 'Usuario'
  }
};
