<template lang="html">
<v-flex xs6 class='mt-2'>
    <v-btn round outline color='amber' class='reduce-margin' @click="toggle('dialog')">
        <v-icon>add</v-icon>
    </v-btn>
</v-flex>
</template>

<script>
import {
    mapMutations
} from 'vuex'

export default {
    methods: {
        ...mapMutations([
            'toggle'
        ])
    }
}
</script>

<style lang="css" scoped>
.reduce-margin {
    margin-left: 0px;
    margin-right: 0px;
}
</style>
