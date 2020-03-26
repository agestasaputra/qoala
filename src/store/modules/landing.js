import axios from "axios";
import moment from "moment";
// import moment from "moment";

const Landing = {
  namespaced: true,
  state: {
    filter: {
      latestTask: true,
      oldestTask: false
    },
    option: "0",
    sorts: [
      { name: "Asc/Desc", value: "0", disabled: true },
      { name: "A-Z", value: "1", disabled: false },
      { name: "Z-A", value: "2", disabled: false }
    ],
    tasks: [
      {
        title: "Belajar dirumah",
        date: "06/04/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "Mencuci Sepatu",
        date: "25/03/2019",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "Olahraga dirumah",
        date: "20/10/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "Latihan gitar",
        date: "04/04/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "Nonton TV",
        date: "17/05/2019",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      },
      {
        title: "Tidur",
        date: "10/08/2020",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo
          quae quis necessitatibus cupiditate totam asperiores illum, natus
          perspiciatis ipsum soluta veniam optio labore error at! Veniam
          molestias veritatis similique?`
      }
    ]
  },
  getters: {
    latestTask: state => {
      const latestTask = [...state.tasks].reverse();
      console.log("cek latestTask:", latestTask);
      latestTask.sort((a, b) => {
        let dateMomentObjectA = moment(a.date, "DD/MM/YYYY");
        var dateObjectA = dateMomentObjectA.toDate();
        let dateMomentObjectB = moment(b.date, "DD/MM/YYYY");
        var dateObjectB = dateMomentObjectB.toDate();
        let c = dateObjectA;
        let d = dateObjectB;
        return d - c;
      });
      return latestTask;
    },
    oldestTask: state => {
      const oldestTask = [...state.tasks].reverse();
      console.log("cek oldestTask:", oldestTask);
      oldestTask.sort((a, b) => {
        let dateMomentObjectA = moment(a.date, "DD/MM/YYYY");
        var dateObjectA = dateMomentObjectA.toDate();
        let dateMomentObjectB = moment(b.date, "DD/MM/YYYY");
        var dateObjectB = dateMomentObjectB.toDate();
        let c = dateObjectA;
        let d = dateObjectB;
        return c - d;
      });
      return oldestTask;
    },
    ascTask: state => {
      const ascTask = [...state.tasks];
      ascTask.sort((a, b) => {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();
        if (nameA === nameB) return 0;
        return nameA > nameB ? 1 : -1;
      });
      console.log("cek ascTask:", ascTask);
      return ascTask;
    },
    descTask: state => {
      const descTask = [...state.tasks];
      descTask.sort((a, b) => {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();
        if (nameA === nameB) return 0;
        return nameA > nameB ? 1 : -1;
      });
      console.log("cek descTask:", descTask);
      return descTask.reverse();

      // const descTask = [...state.tasks];
      // descTask.sort((a, b) => {
      //   let nameA = a.title.toLowerCase();
      //   let nameB = b.title.toLowerCase();
      //   if (nameA === nameB) return 1;
      //   return nameA < nameB ? 1 : -1;
      // });
      // console.log("cek descTask:", descTask);
      // return descTask;
    }
  },
  mutations: {
    SET_TASKS(state, payload) {
      state.tasks = payload;
    },
    ADD_TASK(state, payload) {
      state.tasks = [...state.tasks, payload];
    },
    LATEST_TASK(state, payload) {
      state.filter = payload;
    },
    OLDEST_TASK(state, payload) {
      state.filter = payload;
    },
    SET_OPTION(state, payload) {
      const tmp = {
        latestTask: false,
        oldestTask: false
      };
      state.filter = tmp;
      state.option = payload;
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
