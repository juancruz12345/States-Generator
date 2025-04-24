UI Component Lab Una sandbox interactiva para testear, editar y documentar tus propios componentes React de forma visual. 📦 ¿Qué es?

UI Component Lab es una aplicación web que permite a desarrolladores frontend:

📁 Subir componentes React personalizados

👀 Visualizar distintos estados (props)

🛠 Editar props en tiempo real

💾 Exportar estados como código listo para producción o documentación

🔥 Sin necesidad de compilar, instalar ni configurar

🚀 ¿Cómo se usa?

    Subí tu componente .jsx

El componente debe:

-Estar escrito como función React

-Exportarse por default

-Incluir un objeto states con ejemplos de props opcionales

Ejemplo:

function MyButton({ label, onClick, style }) { return {label}; }

export default MyButton;

export const states = { Default: { label: "Click me", style: { backgroundColor: "blue", color: "white" }, onClick: "(e) => alert('Hola!')" }, Danger: { label: "Eliminar", style: { backgroundColor: "red", color: "white" } } };

    Editá las props desde la interfaz

Podés editar props como: Tipo de valor | Ejemplo String | "Hola" Número | 42 Boolean | true, false Estilo | { "backgroundColor": "red" } Función | (e) => alert("Click!")

    Agregá, eliminá o cloná estados

💡 Cada estado representa un conjunto de props ➕ Podés agregar props nuevas, clonar un estado y renombrarlo.

    Exportá tu trabajo

📤 Podés:

Copiar el código export const states = { ... }

Descargarlo como archivo .js

Ideal para integrarlo en tu repo, Storybook o tests.

🧠 Funcionalidades actuales

✅ Subida y renderizado de componentes

✅ Editor visual de props

✅ Soporte para funciones como onClick

✅ Clonado y edición de estados

✅ Modo claro/oscuro

✅ Exportación como código y archivo

✅ Vista previa en tiempo real

✅ Guía rápida embebida

✅ Componente de ejemplo descargable

🔮 Ideas futuras (¡contribuciones bienvenidas!)

🎯 Tipado dinámico de inputs (detecta boolean, number, etc.)

🧪 Previsualización interactiva para inputs controlados

💾 Guardado de estados en localStorage

🌐 Compartir componentes vía link

📤 Exportar a formato Storybook

🔍 Buscador de props

📂 Historial de componentes cargados

🧱 Biblioteca de componentes reutilizables

🛠 Tecnologías usadas

⚛️ React 19

🧠 Babel (standalone) para transpilar JSX dinámico

🎨 CSS moderno (modo claro/oscuro con variables CSS)

🧪 Evaluación segura con eval + validación de props

👨‍💻 Contribuir

¿Querés proponer mejoras, arreglar algo o agregar una nueva función? ¡Forkeá este repo y mandá un PR! También podés abrir un issue con ideas. 📄 Licencia

MIT — Libre para usar, modificar y distribuir.
