<template lang='html'>
<div>
    <v-content>
        <v-container>
            <!-- Begin Dialog -->
            <v-dialog v-model='dialog' max-width='500px'>
                <v-card>
                    <v-container>
                        <v-card-title class='justify-left product-sans heading'>
                            <v-icon color='amber'>edit</v-icon><span class='ml-3'>Add a Class</span>
                        </v-card-title>
                        <v-card-text>
                            <v-form>
                                <v-layout column align-left fill-height wrap>
                                    <v-flex xs4>
                                        <v-text-field v-model='formData.name' color='amber' prepend-icon='description' placeholder='Class Name'></v-text-field>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                    <v-flex xs4>
                                        <v-text-field v-model='formData.teacher' color='amber' prepend-icon='assignment_ind' placeholder='Teacher'></v-text-field>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                    <v-flex xs2>
                                        <v-select :items='periods' v-model='formData.period' prepend-icon='calendar_today' color='amber' label='Period'></v-select>
                                    </v-flex>
                                </v-layout>
                            </v-form>
                        </v-card-text>
                        <v-card-actions class='pa-3 justify-left'>
                            <v-btn color='amber' @click='addClass()' outline round>Save</v-btn>
                            <v-btn color='amber darken-3' @click='dialog = false' outline round>Cancel</v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </v-dialog>
            <!-- End Dialog -->
            <v-layout align-center justify-center row fill-height />
            <v-data-table :headers='headers' :items='subjects' hide-actions>
                <template slot='items' slot-scope='props'>
                    <td class='selectedDark font-weight-bold' :class='getSubjectColor(props.item)'>{{ props.item.name}}</td>
                    <td>{{props.item.teacher}}</td>
                    <td>{{props.item.period}}</td>
                    <td>
                        <v-icon small @click='deleteItem(props.item)'>delete</v-icon>
                    </td>
                </template>
            </v-data-table>
            <v-toolbar flat color='white'>
                <v-btn outline round color='amber' @click='dialog = true'>
                    <v-icon>add</v-icon>
                </v-btn>
            </v-toolbar>
            </v-layout>
        </v-container>
    </v-content>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    data() {
        return {
            dialog: false,
            periods: [
                1,
                2,
                3,
                4
            ],
            formData: {
                name: '',
                teacher: '',
                period: 0
            },
            headers: [{
                    text: 'Class',
                    align: 'left',
                    sortable: false,
                    value: 'class'
                },
                {
                    text: 'Teacher',
                    align: 'left',
                    sortable: false,
                    value: 'teacher'
                },
                {
                    text: 'Period',
                    align: 'left',
                    sortable: true,
                    value: 'period'
                },
                {
                    text: 'Actions',
                    align: 'left',
                    sortable: false,
                    value: 'actions'
                }
            ]
        };
    },

    computed: {
        // Import the subject state
        ...mapState(['subjects', 'subjectColors']),
    },

    methods: {
        deleteItem(item) {
            let index = this.subjects.indexOf(item);
            this.subjects.splice(index, 1);;
        },
        addClass() {
            if (this.subjects.length < 4) {
                let name = this.formData.name;
                let teacher = this.formData.teacher;
                let period = this.formData.period;
                this.subjects.push({
                    name: name || "",
                    teacher: teacher || "",
                    period: period || ""
                })
                this.formData = {};
                this.dialog = false;
            } else {
                alert('Sorry, only four subjects are supported.');
                this.dialog = false;
                this.formData = {};
            }
        },
        getSubjectColor(item) {
            return this.subjectColors[this.subjects.indexOf(item)] + '--text';
        }
    }
};
</script>

<style lang='css'>
</style>
