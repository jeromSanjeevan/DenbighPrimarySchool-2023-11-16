import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const colSectionAnimations = [
  trigger('toggleAnimation', [
    state('open', style({ height: '*' })),
    state('closed', style({ height: '0', overflow: 'hidden' })),
    transition('open <=> closed', animate('700ms ease-in-out')),
  ]),
];
