import Vue from 'vue';
import Vuex from 'vuex';
import vuexPer from 'vuex-persist';

//import Storage from './helpers/storage.js';
// Seperate accessor objects for local storage
//const assignStorage = new Storage('assignments');
//const completedStorage = new Storage('completed');

Vue.use(Vuex);

const vuexPersist = new vuexPer({
  key: 'bettertime',
  storage: localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    dialog: false,
    drawer: false,
    completed: 0,
    classes: [],

    assignments: [
      
    ],

    subjects: [
      
    ],
    subjectColors: [
      'blue',
      'pink',
      'green',
      'orange'
    ]
  },
  mutations: {

    toggle(state, element) {
      state[element] = !state[element];
    },

    setDisplay(state, value) {
      state.drawer = value;
    },

    /*syncWithLocalStorage(state) {
      state.assignments = assignStorage.get();
      state.completed = completedStorage.get();
    },*/

    // Assignments
    addAssignment(state, data) {
      state.assignments.push(data);
    },

    deleteAssignment(state, data) {
      state.assignments.splice(data, 1);
      if (state.assignments.length == 0) {
        state.completed = 0;
      } else {
        state.completed++;
      }
    }
  },
});
