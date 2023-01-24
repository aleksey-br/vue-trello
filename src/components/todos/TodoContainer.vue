<template>
  <SlickList
    class="flex h-full relative"
    axis="x"
    lockAxis="x"
    v-model:list="todosStore.todos"
    @sort-start="todosStore.startDragging"
    use-drag-handle
    useWindowAsScrollContainer
    :transition-duration="500">
    <TodoBoard />
  </SlickList>
</template>

<script setup>
import { ref } from "vue";
import { SlickList } from "vue-slicksort";
import TodoBoard from "@/components/todos/TodoBoard.vue";
import { useTodosStore } from "@/store";

const todosStore = useTodosStore();
// const data = ref([
//   {
//     id: 1,
//     name: "one",
//     group: "one",
//     items: [
//       {
//         id: 1,
//         title: "wedwed",
//         descr:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//         create_date: new Date().toLocaleDateString(),
//         release_date: "23.05.2023",
//       },
//       {
//         id: 2,
//         title: "wedwed",
//         descr:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//         create_date: new Date().toLocaleDateString(),
//         release_date: "23.05.2023",
//       },
//       {
//         id: 3,
//         title: "wedwed",
//         descr:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//         create_date: new Date().toLocaleDateString(),
//         release_date: "23.05.2023",
//       },
//       {
//         id: 4,
//         title: "wedwed",
//         descr:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//         create_date: new Date().toLocaleDateString(),
//         release_date: "23.05.2023",
//       },
//       {
//         id: 5,
//         title: "wedwed",
//         descr:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//         create_date: new Date().toLocaleDateString(),
//         release_date: "23.05.2023",
//       },
//       {
//         id: 6,
//         title: "wedwed",
//         descr:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//         create_date: new Date().toLocaleDateString(),
//         release_date: "23.05.2023",
//       },
//     ],
//   },
//   {
//     id: 1,
//     name: "one",
//     group: "one",
//     items: [
//       {
//         id: 1,
//         title: "wedwed",
//         descr:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//         create_date: new Date().toLocaleDateString(),
//         release_date: "23.05.2023",
//       },
//       // {
//       //   id: 2,
//       //   title: "wedwed",
//       //   descr:
//       //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//       //   create_date: new Date().toLocaleDateString(),
//       //   release_date: "23.05.2023",
//       // },
//       // {
//       //   id: 3,
//       //   title: "wedwed",
//       //   descr:
//       //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//       //   create_date: new Date().toLocaleDateString(),
//       //   release_date: "23.05.2023",
//       // },
//       // {
//       //   id: 4,
//       //   title: "wedwed",
//       //   descr:
//       //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//       //   create_date: new Date().toLocaleDateString(),
//       //   release_date: "23.05.2023",
//       // },
//       // {
//       //   id: 5,
//       //   title: "wedwed",
//       //   descr:
//       //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//       //   create_date: new Date().toLocaleDateString(),
//       //   release_date: "23.05.2023",
//       // },
//       // {
//       //   id: 6,
//       //   title: "wedwed",
//       //   descr:
//       //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
//       //   create_date: new Date().toLocaleDateString(),
//       //   release_date: "23.05.2023",
//       // },
//     ],
//   },
// ]);
</script>

<style lang="scss" scoped></style>
