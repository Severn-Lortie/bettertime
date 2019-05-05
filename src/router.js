import Vue from 'vue';
import Router from 'vue-router';

// Views
import CardView from './views/CardView.vue';
import assignments from './views/assignments.vue';
import timeTable from './views/timeTable.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', component: CardView,
    },
    {
      path: '/assignments', component: assignments
    },
    {
      path: '/time-table', component: timeTable
    }
  ]
});
