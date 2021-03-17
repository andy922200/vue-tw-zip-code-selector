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

interface ObjectKeys {
    [key: string]: string | number | undefined | ObjectKeys;
}

interface ZoneObject extends ObjectKeys {
    name: string;
    zipCode: string | number;
    county: string;
    countyName?: string;
}

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


