import Alert, { states as alertStates } from './Alert.jsx';
import Button, { states as buttonStates } from './Button.jsx';
import Input, { states as inputStates } from './Input.jsx';
import Tooltip, { states as tooltipStates } from './Tooltip.jsx';
import Loader, { states as loaderStates } from './Loader.jsx';
import Badge, { states as badgeStates } from './Badge.jsx';
import Card, { states as cardStates } from './Card.jsx';
import Modal, { states as modalStates } from './Modal.jsx';
import Avatar, { states as avatarStates } from './Avatar.jsx';
import Checkbox, { states as checkboxStates } from './Checkbox.jsx';
import Switch, { states as switchStates } from './Switch.jsx';
import Tag, { states as tagStates } from './Tag.jsx';
import ProgressBar, { states as progressStates } from './ProgressBar.jsx';
import Tabs, { states as tabsStates } from './Tabs.jsx';
import Toast, {states as toastStates} from './Toast.jsx';

import alertCode from './Alert.jsx?raw';
import alertCSS from './Alert.css?raw';
import buttonCode from './Button.jsx?raw';
import buttonCSS from './Button.css?raw';
import inputCode from './Input.jsx?raw';
import inputCSS from './Input.css?raw';
import tooltipCode from './Tooltip.jsx?raw';
import tooltipCSS from './Tooltip.css?raw';
import loaderCode from './Loader.jsx?raw';
import loaderCSS from './Loader.css?raw';
import badgeCode from './Badge.jsx?raw';
import badgeCSS from './Badge.css?raw';
import cardCode from './Card.jsx?raw';
import cardCSS from './Card.css?raw';
import modalCode from './Modal.jsx?raw';
import modalCSS from './Modal.css?raw';
import avatarCode from './Avatar.jsx?raw';
import avatarCSS from './Avatar.css?raw';
import checkboxCode from './Checkbox.jsx?raw';
import checkboxCSS from './Checkbox.css?raw';
import switchCode from './Switch.jsx?raw';
import switchCSS from './Switch.css?raw';
import tagCode from './Tag.jsx?raw';
import tagCSS from './Tag.css?raw';
import progressCode from './ProgressBar.jsx?raw';
import progressCSS from './ProgressBar.css?raw';
import tabsCode from './Tabs.jsx?raw';
import tabsCSS from './Tabs.css?raw';
import toastCode from './Toast.jsx?raw'
import toastCSS from './Toast.css?raw'


export default [
  {
    name: 'Alert',
    Component: Alert,
    states: alertStates,
    jsxCode: alertCode,
    cssCode: alertCSS,
  },
  {
    name: 'Button',
    Component: Button,
    states: buttonStates,
    jsxCode: buttonCode,
    cssCode: buttonCSS,
  },
  {
    name: 'Input',
    Component: Input,
    states: inputStates,
    jsxCode: inputCode,
    cssCode: inputCSS,
  },
  {
    name: 'Tooltip',
    Component: Tooltip,
    states: tooltipStates,
    jsxCode: tooltipCode,
    cssCode: tooltipCSS,
  },
  {
    name: 'Loader',
    Component: Loader,
    states: loaderStates,
    jsxCode: loaderCode,
    cssCode: loaderCSS,
  },
  {
    name:"Toast",
    Component:Toast,
    states:toastStates,
    jsxCode:toastCode,
    cssCode:toastCSS
  },
  {
    name: 'Badge',
    Component: Badge,
    states: badgeStates,
    jsxCode: badgeCode,
    cssCode: badgeCSS,
  },
  {
    name: 'Card',
    Component: Card,
    states: cardStates,
    jsxCode: cardCode,
    cssCode: cardCSS,
  },
  {
    name: 'Modal',
    Component: Modal,
    states: modalStates,
    jsxCode: modalCode,
    cssCode: modalCSS,
  },
  {
    name: 'Avatar',
    Component: Avatar,
    states: avatarStates,
    jsxCode: avatarCode,
    cssCode: avatarCSS,
  },
  {
    name: 'Checkbox',
    Component: Checkbox,
    states: checkboxStates,
    jsxCode: checkboxCode,
    cssCode: checkboxCSS,
  },
  {
    name: 'Switch',
    Component: Switch,
    states: switchStates,
    jsxCode: switchCode,
    cssCode: switchCSS,
  },
  {
    name: 'Tag',
    Component: Tag,
    states: tagStates,
    jsxCode: tagCode,
    cssCode: tagCSS,
  },
  {
    name: 'ProgressBar',
    Component: ProgressBar,
    states: progressStates,
    jsxCode: progressCode,
    cssCode: progressCSS,
  },
  {
    name: 'Tabs',
    Component: Tabs,
    states: tabsStates,
    jsxCode: tabsCode,
    cssCode: tabsCSS,
  },
];
