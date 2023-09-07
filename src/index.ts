/* Importing index.css here allows us to skip importing it into
each and every component file while still generating a
single css bundle containing all necessary Tailwind styles.
*/

import './tailwind.css'

/** Components */
export { Primary, buttonProps } from './components/buttons/Primary'
export { Carousel, carouselProps } from './components/carousel'
export { Icon, iconProps, iconsListType } from './components/dynamicIcon'
export { LabeledInput, LabeledTextArea, inputProps, textAreaProps } from './components/inputs'
export { Drawer, DrawerProps } from './components/modals/drawer'
export { Popup, dialogProps } from './components/modals/popup'
export { Toast, ToastProps } from './components/toast'