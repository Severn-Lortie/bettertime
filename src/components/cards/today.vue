<style lang='css'>
</style>

<template lang="html">
<div>
    <v-card class='mt-4 mb-4 card'>
        <v-card-title class='layout justify-center font-weight-bold'>
            <span class='product-sans heading'>{{getDate()}}</span>
        </v-card-title>
        <v-card-title class='layout justify-center pa-0'>
            <span class='subheading grey--text text--darken-1'>{{getSchDaySentence()}}</span>
        </v-card-title>
        <!-- Begin time table -->
        <v-container class='pa-2'>
            <v-data-table :headers='headers' :items='subjects' :hide-actions='true'>
                <template slot='items' slot-scope='props'>
                    <td class='selectedDark'>{{ props.item.period}}</td>
                    <td>{{props.item.name}}</td>
                </template>
            </v-data-table>
        </v-container>
        <!-- End time table -->
    </v-card>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    data() {
        return {
            date: new Date(),
            headers: [{
                text: 'Period',
                align: 'left',
                sortable: true,
                value: 'period'
            }, {
                text: 'Classes',
                align: 'left',
                sortable: false,
                value: 'classes'
            }]
        }
    },

    computed: {
        ...mapState(['subjects']),

        schDay() {
            let dayNumber = this.date.getDay();
            let schDay;

            if (dayNumber % 2 == 0) {
                schDay = 1;
            } else {
                schDay = 2;
            }
            return schDay;
        }
    },

    methods: {
        getDate() {
            // Setup current date in numbers
            let dayNumber = this.date.getDay();
            let date = this.date.getDate();
            let month = this.date.getMonth();

            //All months
            let months = ['January', 'Febuary', 'March',
                'April', 'May', 'June',
                'July', 'August', 'September',
                'October', 'November', 'December'
            ];

            // All days of the week
            let daysOfTheOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday'
            ];

            // Based on the day (number) get the day nam
            let dayName = daysOfTheOfWeek[dayNumber];
            let monthName = months[month];

            // Return a templat literal with the complete date format
            return `${dayName}, ${monthName} ${date}`
        },
        getSchDaySentence() {
            let dayNumber = this.date.getDay();

            if (dayNumber > 5 || dayNumber == 0) {
                return `It's the Weekend!`
            }

            return `Today is: day ${this.schDay}`;
        }

    }
}
</script>
