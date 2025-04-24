

export function Header({setSection, setDarkMode, darkMode}){

    return(
        <header
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    borderBottom: '1px solid var(--border)',
    marginBottom: '2rem',
    position: 'sticky',
    top: 0,
    backgroundColor: 'var(--bg)',
    zIndex: 2,
  }}
>
<h1
    style={{
      fontWeight: 700,
      fontSize: '1.4rem',
      color: 'var(--text)',
      letterSpacing: '-0.5px',
    }}
  >
    🧪 ComponentLab
  </h1>
  
    {/**<img style={{width:"22%"}} src="/Logo.png"></img> */}
  

  <nav style={{ display: 'flex', gap: '0.75rem' }}>
    <button className="nav-btn" onClick={() => setSection('guide')}>
      📘 Guía rápida
    </button>
    <button className="nav-btn" onClick={() => setSection('galery')}>
      🧱 Ejemplos
    </button>
    <button className="nav-btn" onClick={() => setSection('upload')}>
      📤 Subir componente
    </button>
    <button className="nav-btn" onClick={() => setDarkMode(prev => !prev)}>
      {darkMode ? '🌞 Claro' : '🌙 Oscuro'}
    </button>
  </nav>
</header>

    )
}