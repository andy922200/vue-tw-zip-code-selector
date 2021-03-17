import {
    DefineComponent, Plugin 
} from 'vue'


declare const VueTwZipCodeSelector: Exclude<Plugin['install'], undefined>
export default VueTwZipCodeSelector

export const VueTwZipCodeSelectorSample: DefineComponent<{}, {}, any>
