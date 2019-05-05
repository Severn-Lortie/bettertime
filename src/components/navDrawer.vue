<style lang="css" scoped>
a {
    text-decoration: none;
    cursor: pointer;
    color: #757575;
}
</style>

<template lang="html">
<v-navigation-drawer v-model='displayDrawer' floating absolute clipped class='grey lighten-5 nav-drawer' app>

    <v-list two-line>
        <template v-for='action in actions'>
            <router-link :to='action.ref'>
                <v-list-tile :key='action.title' @click=''>
                    <v-list-tile-action>
                        <v-icon color='amber'>{{action.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{action.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </router-link>
        </template>
    </v-list>

</v-navigation-drawer>
</template>

<script>
import {
    mapMutations
} from 'vuex';

export default {
    data() {
        return {
            actions: [{
                    title: 'Overview',
                    icon: 'home',
                    ref: '/'
                },
                {
                    title: 'Assignments',
                    icon: 'assignment',
                    ref: '/assignments'
                },
                {
                    title: 'Time Table',
                    icon: 'grid_on',
                    ref: '/time-table'
                }
            ]
        };
    },
    methods: {
        ...mapMutations(['setDisplay'])
    },
    computed: {
        displayDrawer: {
            set(value) {
                let storeVal = this.$store.state.drawer;
                if (value !== storeVal) this.setDisplay(value);
            },

            get() {
                return this.$store.state.drawer;
            }
        }
    }
};
</script>
