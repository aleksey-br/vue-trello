<!-- <template>
  <div
    class="w-full p-4 bg-blue-500 absolute bottom-0 left-0 right-0 shadow-md">
    <label for="title">Title</label>
    <input
      class="block w-full py-1 px-2 outline-none text-gray-800 rounded-md"
      type="text"
      name="title"
      id="title" />
    <label for="descr">Description</label>
    <textarea
      class="block w-full py-1 px-2 outline-none text-gray-800 rounded-md resize-none"
      name="descr"
      id="descr"
      cols="30"
      rows="5">
    </textarea>
    <span></span>
    <label for="date">Release date</label>
    <input
      class="block w-full py-1 px-2 text-gray-800 outline-none mb-4"
      type="date"
      name="date"
      id="date" />
    <button
      class="w-full px-4 py-2 bg-green-500 rounded-md text-center shadow-md hover:bg-green-600 transition-colors duration-200"
      @click="handleSave">
      Save
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["handleClickSave"]);

const handleSave = () => {
  emit("handleClickSave");
};
</script>

<style lang="scss" scoped></style> -->
