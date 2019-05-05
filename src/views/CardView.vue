<style lang='css'>
  .card {
    box-shadow: none;
    border-radius: 20px 20px 20px 20px;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px;
    border: 1px solid #FFC107;
  }


</style>

<template lang='html'>


    <v-content>
        <v-container fluid fill-height>
            <v-layout v-bind='binding' justify-center>
                <!-- Begin card feed -->
                <v-flex  xs11 sm6 md6 lg4 >
                    <app-upcoming-assignments></app-upcoming-assignments>
                    <app-today></app-today>
                </v-flex>
                  <!-- anything here will appear next to vertical card stream -->
                  <v-flex xs11 sm6 md3 :class="{
                    'ma-0': $vuetify.breakpoint.xs,
                    'mt-2': $vuetify.breakpoint.xs,
                    'ml-4': $vuetify.breakpoint.smAndUp,
                    'mt-4': $vuetify.breakpoint.smAndUp,
                    }">
                    <app-events></app-events>
                  </v-flex>
            </v-layout>
          </v-container>
    </v-content>


</template>

<script>

import upcomingAssignmentsCard from '../components/cards/upcomingAssignmentsCard.vue'
import today from '../components/cards/today.vue'
import events from '../components/cards/events.vue'

export default {
    computed: {
      binding() {
        const binding = {
          row: this.$vuetify.breakpoint.mdAndUp,
          column: this.$vuetify.breakpoint.xs
        };

        return binding;
      }
    },
    components: {
        'app-upcoming-assignments': upcomingAssignmentsCard,
        'app-today': today,
        'app-events':events
    }

}

</script>
