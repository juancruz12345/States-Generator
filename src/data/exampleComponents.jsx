import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Badge } from '../components/Badge';
import  Alert  from '../components/Alert';
import { Loader } from '../components/Loader';
import { Tooltip } from '../components/Tooltip';
import { Tabs } from '../components/Tabs';

export const components = [
  {
    name: 'Button',
    Component: Button,
    states: {
      Default: { label: 'Enviar' },
      Loading: { label: 'Enviando...', loading: true },
      Disabled: { label: 'Enviar', disabled: true },
      Error: { label: 'Error', error: true },
      Success: { label: 'Listo', success: true },
    },
  },
  {
    name: 'Input',
    Component: Input,
    states: {
      Default: { placeholder: 'Tu email' },
      Error: { placeholder: 'Email inválido', error: true },
    },
  },
  {
    name: 'Badge',
    Component: Badge,
    states: {
      Info: { text: 'Beta', variant: 'info' },
      Success: { text: 'Verificado', variant: 'success' },
      Warning: { text: 'Atención', variant: 'warning' },
      Error: { text: 'Falla', variant: 'error' },
    },
  },
  {
    name: 'Alert',
    Component: Alert,
    states: {
      Info: { message: 'Guardado correctamente', type: 'info' },
      Error: { message: 'No se pudo guardar', type: 'error' },
      Success: { message: 'Datos enviados', type: 'success' },
    },
  },
  {
    name: 'Loader',
    Component: Loader,
    states: {
      Small: { size: 24 },
      Medium: { size: 40 },
      Large: { size: 60 },
    },
  },
  {
    name: 'Tooltip',
    Component: Tooltip,
    states: {
      Info: {
        text: 'Copiar al portapapeles',
        children: <button className="btn">Copiar</button>,
      },
    },
  },
  {
    name: 'Tabs',
    Component: Tabs,
    states: {
      Default: {
        tabs: {
          Inicio: <p>Bienvenido a la app</p>,
          Perfil: <p>Tu perfil está vacío</p>,
          Ajustes: <p>Modo oscuro, notificaciones, etc.</p>,
        },
      },
    },
  },
];
