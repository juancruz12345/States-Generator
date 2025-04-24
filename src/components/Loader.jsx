import './Loader.css';

function Loader({ children,size, ...props }) {
  return (
    <div className="loader-container" {...props}>
      <div className='spinner' style={{width: size, height: size, borderWidth: size / 8, display:'flex', margin:'0 auto'}}>
      {children}
      </div>
    </div>
  );
}

export default Loader;

export const states = {
  
  Small: {
 size:24
},
Medium: {
  size:40
  
},
  Large: {
  size:60
}
};
