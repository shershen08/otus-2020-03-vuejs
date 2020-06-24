<template>
  <div>
    <!-- <p v-bind:class="classObject"
        v-bind:id="dataLoadResult"
        v-bind:style="{fontSize:`${styleSize}px`, paddingTop: `${styleSize/2}px`}">
      {{ dataLoadResult }}
    </p>
    <input v-model="styleSize" type="number"> -->

    <!-- <my-nice-comp/> -->
{{users}}
<hr/>
  <div v-for="user, index in users" :key="index">
      {{index}} /  {{user.name}}
  </div>
    
    <button v-on:click="changeUser()">changeUser</button>

    <button v-on:click="loadMoreData()">load</button>

    <button v-on:click="$emit('remove')">remove</button>

    <!-- <section v-if="loadSuccess">
    success
  </section>
  <section v-else>
    error
  </section>
  <section v-show="!loadSuccess">
    this is hidden
  </section> -->
  </div>
  <!-- <>
    <label>a</label>
    <input v-model="somemodel" type="email" />
  </> -->
  <!-- <template v-else>
    <label>a</label>
    <input v-model="somemodel" type="text" />
  </template> -->
  <!-- <div class="hello"> -->
  <!-- <form>
      <div class="form-block">
    
      </div>
      <div class="form-block"></div>
      <div class="form-block"></div>
      <div class="form-block"></div>
    </form> -->
  <!-- <h1>{{ msg }}</h1>
  <hr/>
  {{base}}
    <p>Current time: {{date}}</p>
    <button v-on:click="updateDate()">update</button>


 -->
  <!-- </div> -->
</template>

<script>
import Vue from 'vue';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    base: String
  },
  data() {
    return {
      users: [
         {
          id: 1,
          name: 'Лора' 
        },
        {
          id: 2,
          name: 'Maxim' 
        },
        {
          id: 3,
          name: 'Владимир' 
        }
      ],
      date: new Date(),
      foo: "bar",
      styleSize: '12',
      refreshInterval: null,
      loadSuccess: true,
      dataLoadResult: ""
    };
  },
  // a,b,c ---> d
  computed: {
    classObject() {
      return {
        success: this.loadSuccess,
        error: !this.loadSuccess,
        default: true
      };
    }
  },
  // 8
  mounted() {
    
    console.log("mounted");

    this.refreshInterval = setInterval(() => {
      this.updateDate();
    }, 2000);

    //load data
    this.loadData();
  },
  destroyed() {
    console.log("destroyed");
    clearInterval(this.refreshInterval);
    //remove
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  methods: {
    loadMoreData(){
      this.$emit('load');
    },
    changeUser(){
      // this.users[0] = {
      //   name: 'Кирилл'
      // }
      // Vue.set(this.users, 0, {
      //    name: 'Кирилл',
      //    id: 0
      // })
      // Vue.delete(this.users, 0)
      // this.users.splice(0, 1)
    },
    // calculateClass(){
    //   this.classObject = {
    //   }
    // },
    loadData() {
      // call API

      //axios.get('/api/')
      //success
      this.loadSuccess = true;
      this.dataLoadResult = "Data loaded";

      //error
      // this.loadSuccess = false;
      // this.dataLoadResult = 'Error happened';
    },
    updateDate() {
      this.date = new Date();
      //this.foo
      //this.msg
      // this.showAlert();
    },
    showAlert() {
      alert(this.date);
    }
  }
};
</script>

<style scoped>
body {
  background: red;
}
.success {
  color: aquamarine;
}
.error {
  color: brown;
}
</style>
