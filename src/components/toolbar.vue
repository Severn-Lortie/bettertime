<template lang="html">
<v-toolbar :height='toolBarHeight' color='white' absolute app clipped-left class='bar'>
    <v-toolbar-side-icon @click='toggle'></v-toolbar-side-icon>
    <v-toolbar-title class='product-sans display1'><b class='amber--text'>Better</b>Time</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-avatar tile size='100'><img class="hidden-sm-and-down" src='../assets/mountain-side-with-trees-made-up-different-shapes.svg'></img></v-avatar>
</v-toolbar>
</template>

<script>
export default {

    data() {
        return {

        }
    },

    computed: {
        toolBarHeight() {
            if (this.$vuetify.breakpoint.name == 'xs') {
                return 50
            } else {
                return 100
            }
        }
    },

    methods: {

        toggle() {
            let toggld;
            toggld = !this.$store.state.drawer;
            this.$store.commit('setDisplay', toggld);
        }

    }
}
</script>

<style lang="css" scoped>
.bar {
    box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.02)
}

.display1 {
    font-size: 34px;
}
</style>
