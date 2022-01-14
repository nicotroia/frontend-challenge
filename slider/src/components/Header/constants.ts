import {
  faTint,
  faPaintBrush,
  faEyeDropper,
} from '@fortawesome/fontawesome-free-solid';

import styles from './styles.scss';

export const LABELS = [
  {
    title: 'Gradients',
    subtitle: 'Start, end, angle',
    className: styles.one,
    icon: faTint,
  },
  {
    title: 'Presets',
    subtitle: 'Manage presets',
    className: styles.two,
    icon: faPaintBrush,
  },
  {
    title: 'Colors',
    subtitle: 'Pick any color',
    className: styles.three,
    icon: faEyeDropper,
  },
];

export default {};
