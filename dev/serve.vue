<template>
    <div id="app">
        <VueTwZipCodeSelector @getSelectedZone="showSelectedZone" />
        <p>{{result}}</p>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, ref
} from 'vue'

import {
    ZoneObject 
} from '../vue-tw-zip-code-selector'

export default defineComponent({
    name: 'ServeDev',
    setup(){
        const result = ref({
        })

        const showSelectedZone = (selectedZone: ZoneObject) => {
            result.value = selectedZone.value as ZoneObject
        }

        return {
            result,
            showSelectedZone
        }
    }
})
</script>


