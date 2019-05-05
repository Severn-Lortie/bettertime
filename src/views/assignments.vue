<style scoped lang='css'>
</style>

<template lang='html'>
    <v-content>
      <app-add-assignments></app-add-assignments>
        <v-container>
            <v-layout fill-height column class='mt-4'>
                <app-all-assignments></app-all-assignments>
                <app-button-add></app-button-add>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>

import allAssignments from './../components/allAssignments.vue'
import addAssignments from './../components/addAssignment.vue'
import buttonAdd from './../components/buttonAdd.vue'

export default {

    data() {
            return {
        
            }
        },
        components: {
            'app-all-assignments': allAssignments,
            'app-add-assignments':addAssignments,
            'app-button-add':buttonAdd
        },
}

</script>
