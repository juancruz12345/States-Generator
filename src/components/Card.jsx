import './Card.css';

function Card({ title = '', content = '', footer = '',children,...props }) {
  return (
    <div className="card" {...props }>
      <div className="card-header">{title}</div>
      <div className="card-body">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

export default Card;

export const states = {
  Default: {
    title: 'Título de la tarjeta',
    content: 'Este es el contenido principal de la tarjeta.',
    footer: 'Pie de tarjeta'
  },
  Contenido: {
    content: 'Una tarjeta solo con contenido'
  }
};

