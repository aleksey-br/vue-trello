import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 1,
        name: "one",
        group: "one",
        items: [
          {
            id: 1,
            title: "wedwed",
            descr:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
            create_date: new Date().toLocaleDateString(),
            release_date: "23.05.2023",
          },
          {
            id: 2,
            title: "wedwed",
            descr:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
            create_date: new Date().toLocaleDateString(),
            release_date: "23.05.2023",
          },
          {
            id: 3,
            title: "wedwed",
            descr:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
            create_date: new Date().toLocaleDateString(),
            release_date: "23.05.2023",
          },
          {
            id: 4,
            title: "wedwed",
            descr:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
            create_date: new Date().toLocaleDateString(),
            release_date: "23.05.2023",
          },
          {
            id: 5,
            title: "wedwed",
            descr:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
            create_date: new Date().toLocaleDateString(),
            release_date: "23.05.2023",
          },
          {
            id: 6,
            title: "wedwed",
            descr:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
            create_date: new Date().toLocaleDateString(),
            release_date: "23.05.2023",
          },
        ],
      },
      {
        id: 2,
        name: "one",
        group: "one",
        items: [
          {
            id: 1,
            title: "wedwed",
            descr:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
            create_date: new Date().toLocaleDateString(),
            release_date: "23.05.2023",
          },
          // {
          //   id: 2,
          //   title: "wedwed",
          //   descr:
          //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
          //   create_date: new Date().toLocaleDateString(),
          //   release_date: "23.05.2023",
          // },
          // {
          //   id: 3,
          //   title: "wedwed",
          //   descr:
          //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
          //   create_date: new Date().toLocaleDateString(),
          //   release_date: "23.05.2023",
          // },
          // {
          //   id: 4,
          //   title: "wedwed",
          //   descr:
          //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
          //   create_date: new Date().toLocaleDateString(),
          //   release_date: "23.05.2023",
          // },
          // {
          //   id: 5,
          //   title: "wedwed",
          //   descr:
          //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
          //   create_date: new Date().toLocaleDateString(),
          //   release_date: "23.05.2023",
          // },
          // {
          //   id: 6,
          //   title: "wedwed",
          //   descr:
          //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non asperiores ipsa, laborum aliquam ut ad mollitia ipsam architecto rerum quae similique repellat distinctio obcaecati iusto modi voluptas quod expedita? Nam.",
          //   create_date: new Date().toLocaleDateString(),
          //   release_date: "23.05.2023",
          // },
        ],
      },
    ],
  }),

  actions: {
    createTask({ column, title, descr }) {
      const item = this.todos.find((col) => col.id === column);
      item.items.push({
        id: 3,
        title,
        descr,
      });
    },
  },
});
