import axios from "axios";

const Landing = {
  namespaced: true,
  state: {
    tasks: [
      {
        title: "title 01",
        date: "10/08/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "title 02",
        date: "10/08/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "title 03",
        date: "10/08/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "title 04",
        date: "10/08/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "title 05",
        date: "10/08/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "title 06",
        date: "10/08/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      }
    ],
    option: "asc"
  },
  getters: {
    latestTask: state => {
      const latestTask = [...state.tasks].reverse();
      console.log("cek latestTask:", latestTask);
      return latestTask;
    }
  },
  mutations: {
    SET_TASKS(state, payload) {
      state.tasks = payload;
    },
    ADD_TASK(state, payload) {
      state.tasks = [...state.tasks, payload];
      // state.tasks = [...state.tasks, payload].reverse();
    }
  },
  actions: {
    GET_TASKS(context) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
        console.log("cek res:", res);
        context.commit("SET_TASKS", res.data);
      });
    }
  }
};

export default Landing;
