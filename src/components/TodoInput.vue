<template>
  <form @submit.prevent="addTodo">
    <input type="text" ref="input" v-model="todoItem">
    <button type="button">+</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'

export default {
  setup(props, context) {

    console.log(props, context);
    // context.emit('emit')

    const store = useStore();
    let todoItem = ref('');
    const input = ref(null);

    const addTodo = () => {
      if( todoItem.value.trim().length < 1 ) {
        alert('내용을 입력하세요');
        input.value.focus();
        return;
      }

      const date = new Date();
      const todo = {
        id: `${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`,
        value: todoItem.value,
        complete: false,
      };
      store.commit('addTodo', todo);
      todoItem.value = '';
      input.value.focus();
    };

    return { todoItem, addTodo, input }
  }
}
</script>

<style scoped>

</style>
