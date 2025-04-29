import { useState, useEffect } from 'react';

export function Header({ setSection, setDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // evalúa en el primer render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navButtons = (
    <>
      <button className="nav-btn" onClick={() => setSection('guide')}>
        📘 Guía rápida
      </button>
      <button className="nav-btn" onClick={() => setSection('galery')}>
        🧱 Componentes
      </button>
      <button className="nav-btn" onClick={() => setSection('upload')}>
        📤 Subir componente
      </button>
      <button className="nav-btn" onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? '🌞 Claro' : '🌙 Oscuro'}
      </button>
    </>
  );

  return (
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
          cursor:'pointer'
        }}
        onClick={() => setSection('galery')}
      >
        🧪 ComponentLab
      </h1>

      {!isMobile ? (
        <nav style={{ display: 'flex', gap: '0.75rem' }}>{navButtons}</nav>
      ) : (
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: '1.5rem',
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              cursor: 'pointer',
            }}
          >
            ☰
          </button>
          {menuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '2.5rem',
                right: 0,
                backgroundColor: 'var(--bg)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                zIndex: 10,
              }}
            >
              {navButtons}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
