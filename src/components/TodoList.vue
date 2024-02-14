<template>
  <ul>
    <TransitionGroup name="list">
      <li v-for="(todo, i) in todos" :key="todo" :id="todo.id" :class="{ complete: todo.complete }">
        <div class="value">{{ todo.value }}</div>
        <div class="delete"><button type="button" @click="remove(todo, i)">delete</button></div>
      </li>
    </TransitionGroup>
  </ul>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();
    const remove = (todo) => {
      store.commit('removeTodo', todo);
    }
    return {
      todos: computed(() => store.getters.getTodos),
      remove
    }
  }
}
</script>

<style scoped>
ul, li { padding: 0; margin: 0; list-style: none; }
li { display: flex; align-items: flex-start; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #ddd; transition: all .5s}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-leave-active { position: absolute; }
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
