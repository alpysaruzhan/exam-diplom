<template>
  <div>
    <h4>Exam Task 1</h4>
    <ul>
      <li
        @click="item.status = !item.status" v-for="(item, index) in items" :key="index">
        <p v-bind:class="{ active: item.status }">
          My name is {{ item.name }} and surname {{ item.surname }} I work at company called {{ item.company }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          name: 'Bob',
          surname: 'Alice',
          age: 27,
          company: 'Yandex',
          status: false,
        },
        {
          name: 'Mark',
          surname: 'Makar',
          age: 38,
          company: 'Instagram',
          status: false,
        },
        {
          name: 'Max',
          surname: 'Ever',
          age: 47,
          company: 'Meta',
          status: false,
        },
        {
          name: 'Alex',
          surname: 'Yan',
          age: 51,
          company: 'Figma',
          status: false,
        },
        {
          name: 'ELizabeth',
          surname: 'Eugen',
          age: 23,
          company: 'Google',
          status: false,
        },
      ],
      isActive: true,
    };
  },
  components: {},
};
</script>

<style>
h4{
  text-align: center;
}

#app {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  color: #160838;
  margin-top: 60px;
}
ul {
  list-style-type: none;
}
.active {
  background-color: rgba(68, 106, 113, 0.974);
}
</style>