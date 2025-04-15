import './Button.css'

export function Button({ label = 'Click me', loading, disabled, error, success }) {
    const getClass = () => {
      if (error) return 'btn error';
      if (success) return 'btn success';
      if (loading) return 'btn loading';
      return 'btn default';
    };
  
    return (
      <button disabled={disabled || loading} className={getClass()}>
        {loading ? 'Cargando...' : label}
      </button>
    );
  }
  