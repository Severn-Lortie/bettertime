<style lang="css" scoped>
.product-sans {
    font-family: 'Product Sans';
}
</style>

<template lang="html">
<div>
    <v-card class='mt-4 mb-4 card'>
        <v-card-title class='layout justify-center radius-large product-sans heading'>
            Upcoming Assignments
        </v-card-title>

        <!-- Begin notes dialog -->
        <v-dialog max-width='400' v-model='display' v-if='isAssignmentsEmpty'>
            <v-card>
                <v-container>
                    <v-card-title class='product-sans heading'>
                        <v-icon color='amber'>info_outline</v-icon><span class='ml-3'></span>Information
                    </v-card-title>
                    <v-card-text>
                        <v-icon class='mr-2'>notes</v-icon> <b>Notes: </b>{{getAssignmentNotes}}
                        <v-spacer class='mt-2'></v-spacer>
                        <v-icon class='mr-2'>class</v-icon><b>Subject: </b>{{getAssignmentSubject}}
                    </v-card-text>
                </v-container>
            </v-card>
        </v-dialog>
        <!-- End notes dialog  -->

        <!-- Begin list -->
        <v-list two-line subheader>
            <v-list-tile v-for='(task, index) in getSortedAssignments.slice(0,4)' avatar>
                <v-list-tile-avatar class='white--text' :color='task.color'>
                    <div class='product-sans heading'>
                        {{task.subject[0].toUpperCase()}}
                    </div>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{ task.name }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ task.due }} days</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <v-btn icon ripple @click='displayAssign(index)'>
                        <v-icon color='grey lighten-1'>info</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
        <!-- End list -->

        <v-card-text class='pl-5'></v-card-text>
    </v-card>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import {
    mapState
} from 'vuex';

export default {
    data() {
        return {
            assignMessage: 0,
            display: false,
            sortedAssignments: []
        };
    },

    computed: {
        ...mapState(['assignments']),

        getSortedAssignments() {
            return this.assignments.sort((a, b) => {
                return a.due - b.due;
            });
        },

        isAssignmentsEmpty() {
            if (this.assignments.length) return true;
            return false;
        },

        getAssignmentNotes() {
            return this.assignments[this.assignMessage].notes;
        },

        getAssignmentSubject() {
            return this.assignments[this.assignMessage].subject;
        }
    },
    methods: {
        displayAssign(index) {
            this.display = true;
            this.assignMessage = index;
        }
    }
};
</script>
