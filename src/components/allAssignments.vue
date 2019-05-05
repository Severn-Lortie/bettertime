<style lang="css" scoped>
.product-sans {
    font-family: "Product Sans";
    font-size: 2em;
}

.assignment {
    box-shadow: none;
    border-radius: 20px 20px 20px 20px;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px;
    border: 1px solid #ffc107;
    padding: 10px;
}

body {
    overflow-y: hidden;
}

.radius {
    border-radius: 20px 20px 20px 20px;
}
</style>

<template lang="html">
<v-layout class="layout justify-center">

    <v-flex xs12 md-8 lg-6>

        <v-list two-line subheader class="assignments">

            <v-progress-linear v-if="displayProgress" v-model="percentCompleted" color="amber"></v-progress-linear>
            <h3 v-else class="product-sans heading">No assignments :)</h3>
            <template v-for="(task, index) in assignments">
                <v-list-tile avatar class="white radius" @click="">
                    <v-list-tile-avatar class="white--text" :color="task.color">
                        <div class="product-sans heading">
                            {{task.subject[0].toUpperCase()}}
                        </div>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ task.name }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ task.due }} days</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon ripple @click="handleComplete(index)">
                            <v-icon color="amber">check</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </template>
        </v-list>
    </v-flex>
</v-layout>
</template>

<script>
import {
    mapState
} from "vuex";
import {
    mapMutations
} from "vuex";

export default {
    data() {
        return {};
    },
    methods: {
        ...mapMutations(["deleteAssignment"]),

        handleComplete(index) {
            this.deleteAssignment(index);
        }
    },
    computed: {
        ...mapState(["assignments", "completed"]),

        percentCompleted() {
            return (this.completed / (this.assignments.length + 1)) * 100;
        },

        displayProgress() {
            if (this.assignments.length) return true;
            return false;
        }
    },
    filters: {
        capatalize(value) {
            if (!value) return
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
};
</script>
