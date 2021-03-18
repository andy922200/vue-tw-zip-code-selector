import {
    DefineComponent, Plugin 
} from 'vue'

import {
    CountyObject, ZoneObject
} from './core-definition'

export { CountyObject, ZoneObject }

declare const VueTwZipCodeSelectorInstall: Exclude<Plugin['install'], undefined>
export default VueTwZipCodeSelectorInstall

export const VueTwZipCodeSelector: DefineComponent<{}, {}, any>