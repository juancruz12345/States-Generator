import  Button, {states as btnStates} from '../components/Button';
import  Input from '../components/Input';
import  Badge  from '../components/Badge';
import  Alert,{states as alertStates}  from '../components/Alert';
import Loader  from '../components/Loader';
import  Tooltip  from '../components/Tooltip';

import Avatar from '../components/Avatar';
import Modal from '../components/Modal';

export const components = [
  {
    name: 'Button',
    Component: Button,
    states : btnStates
    }
  ,
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
    states:alertStates
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
    name: 'Avatar',
    Component: Avatar,
    states: {
      Default: {
        children: "Avatar content"
      },
        Small: {
        children: "s",
        style: {
          width: "30px",
          height: "30px"
        }
      },
        Large: {
        children: "L",
        style: {
          width: "60px",
          height: "60px"
        }
      }
    },
  },
  {
    name: 'Modal',
    Component: Modal,
    states: {
      Default: {
        children: <div><p>Hola soy un modal</p></div>
      },
    },
  },

];
