<style lang="css">
.remove-margin {
    margin-top: 10px;
    margin-left: 0px;
}

.fill-height {
    height: 100%;
}
</style>

<template lang="html">
<div class='text-xs-center'>
    <v-dialog v-model='displayDialog' width='600' :scrollable='true' :min-width='600'>

        <v-card class='fill-height justify-center'>
            <v-container>
                <v-card-title class='product-sans heading'>
                    <v-icon color='amber'>edit</v-icon><span class='ml-2 mr-2'>Add an Assignment or Test</span>
                </v-card-title>
                <v-card-text class="justify-center align-center">
                    <v-form>
                        <v-text-field color='amber' v-model='forumData.name' prepend-icon='description' label='Name'></v-text-field>
                        <v-text-field color='amber' v-model='forumData.notes' prepend-icon='notes' label='Additonal Notes/Intructions'></v-text-field>
                        <v-select color='amber' v-model='forumData.subject' prepend-icon='class' :items='subjects' label='Subject' item-text='name' return-object></v-select>
                        <v-text-field color='amber' label='Due Date' v-model='forumData.due' prepend-icon='event' readonly @click='displayDatePicker = true'></v-text-field>
                        <v-date-picker reactive color='amber grey--text' v-model='forumData.due' :min='getCurrentDate()'>
                        </v-date-picker>
                    </v-form>
                    <v-btn class='ml-0 mr-0 mt-3' @click='handleSubmit()' outline color='amber'>Sumbit</v-btn>
                </v-card-text>

            </v-container>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import {
    mapMutations
} from 'vuex';
import {
    mapState
} from 'vuex';
import time from '../helpers/time.js';

export default {
    data() {
        return {
            forumData: {
                name: '',
                notes: '',
                subject: {},
                due: ''
            },
            displayDatePicker: false
        };
    },

    methods: {
        ...mapMutations(['toggle', 'addAssignment']),

        handleSubmit() {
            // Close the dialog
            this.toggle('dialog');

            // Get the days due until the assignment
            let daysUntilDue = time.difference(this.forumData.due);

            let colorPos = this.subjects.indexOf(this.forumData.subject);

            this.forumData.color = this.subjectColors[colorPos];

            // Check for Null values once populated

            this.addAssignment({
                name: this.forumData.name,
                notes: this.forumData.notes || "No notes for this assignment.",
                subject: this.forumData.subject.name || "No Subject.",
                dueDate: this.forumData.due || "",
                due: daysUntilDue || "∞",
                color: this.forumData.color
            });
        },
        getCurrentDate() {
            let today = new Date();
            let yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            return yesterday.toISOString();
        }
    },

    computed: {
        ...mapState(['subjects', 'subjectColors']),

        displayDialog: {
            get() {
                return this.$store.state.dialog;
            },
            set() {
                this.toggle('dialog');
            }
        }
    }
};
</script>
