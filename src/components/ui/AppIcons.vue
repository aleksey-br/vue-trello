<template>
  <div v-if="name === 'burger'">
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
        fill="#334155" />
      <path
        d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
        fill="#334155" />
      <path
        d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
        fill="#334155" />
    </svg>
  </div>
  <svg
    v-else-if="name === 'trash'"
    :width="w"
    :height="h"
    viewBox="0 0 64 64"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    xmlns:serif="http://www.serif.com/"
    style="
      fill-rule: evenodd;
      clip-rule: evenodd;
      stroke-linejoin: round;
      stroke-miterlimit: 2;
    ">
    <rect
      id="Icons"
      x="-64"
      y="-64"
      width="1280"
      height="800"
      style="fill: none" />

    <g id="Icons1" serif:id="Icons">
      <g id="Strike"></g>

      <g id="H1"></g>

      <g id="H2"></g>

      <g id="H3"></g>

      <g id="list-ul"></g>

      <g id="hamburger-1"></g>

      <g id="hamburger-2"></g>

      <g id="list-ol"></g>

      <g id="list-task"></g>

      <g id="trash">
        <path
          d="M19.186,16.493l0,-1.992c0.043,-3.346 2.865,-6.296 6.277,-6.427c3.072,-0.04 10.144,-0.04 13.216,0c3.346,0.129 6.233,3.012 6.277,6.427l0,1.992l9.106,0l0,4l-4.442,0l0,29.11c-0.043,3.348 -2.865,6.296 -6.278,6.428c-7.462,0.095 -14.926,0.002 -22.39,0.002c-3.396,-0.044 -6.385,-2.96 -6.429,-6.43l0,-29.11l-4.443,0l0,-4l9.106,0Zm26.434,4l-27.099,0c-0.014,9.72 -0.122,19.441 0.002,29.16c0.049,1.25 1.125,2.33 2.379,2.379c7.446,0.095 14.893,0.095 22.338,0c1.273,-0.049 2.363,-1.163 2.38,-2.455l0,-29.084Zm-4.701,-4c-0.014,-0.83 0,-1.973 0,-1.973c0,0 -0.059,-2.418 -2.343,-2.447c-3.003,-0.039 -10.007,-0.039 -13.01,0c-1.273,0.049 -2.363,1.162 -2.38,2.454l0,1.966l17.733,0Z"
          style="fill-rule: nonzero" />

        <rect
          x="22.58"
          y="28.099"
          width="3"
          height="16.327"
          style="fill-rule: nonzero" />

        <rect
          x="30.571"
          y="28.099"
          width="3"
          height="16.327"
          style="fill-rule: nonzero" />

        <rect
          x="38.58"
          y="28.099"
          width="3"
          height="16.327"
          style="fill-rule: nonzero" />
      </g>

      <g id="vertical-menu"></g>

      <g id="horizontal-menu"></g>

      <g id="sidebar-2"></g>

      <g id="Pen"></g>

      <g id="Pen1" serif:id="Pen"></g>

      <g id="clock"></g>

      <g id="external-link"></g>

      <g id="hr"></g>

      <g id="info"></g>

      <g id="warning"></g>

      <g id="plus-circle"></g>

      <g id="minus-circle"></g>

      <g id="vue"></g>

      <g id="cog"></g>

      <g id="logo"></g>

      <g id="radio-check"></g>

      <g id="eye-slash"></g>

      <g id="eye"></g>

      <g id="toggle-off"></g>

      <g id="shredder"></g>

      <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"></g>

      <g id="react"></g>

      <g id="check-selected"></g>

      <g id="turn-off"></g>

      <g id="code-block"></g>

      <g id="user"></g>

      <g id="coffee-bean"></g>

      <g id="coffee-beans">
        <g id="coffee-bean1" serif:id="coffee-bean"></g>
      </g>

      <g id="coffee-bean-filled"></g>

      <g id="coffee-beans-filled">
        <g id="coffee-bean2" serif:id="coffee-bean"></g>
      </g>

      <g id="clipboard"></g>

      <g id="clipboard-paste"></g>

      <g id="clipboard-copy"></g>

      <g id="Layer1"></g>
    </g>
  </svg>
  <svg
    v-else-if="name === 'settings'"
    :width="w"
    :height="h"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Settings</title>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd">
      <g id="Settings">
        <rect
          id="Rectangle"
          fill-rule="nonzero"
          x="0"
          y="0"
          width="24"
          height="24"></rect>
        <circle
          id="Oval"
          stroke="#0C0310"
          stroke-width="2"
          stroke-linecap="round"
          cx="12"
          cy="12"
          r="3"
          class="child"></circle>
        <path
          d="M10.069,3.36281 C10.7151,1.54573 13.2849,1.54573 13.931,3.3628 C14.338,4.5071 15.6451,5.04852 16.742,4.52713 C18.4837,3.69918 20.3008,5.51625 19.4729,7.25803 C18.9515,8.35491 19.4929,9.66203 20.6372,10.069 C22.4543,10.7151 22.4543,13.2849 20.6372,13.931 C19.4929,14.338 18.9515,15.6451 19.4729,16.742 C20.3008,18.4837 18.4837,20.3008 16.742,19.4729 C15.6451,18.9515 14.338,19.4929 13.931,20.6372 C13.2849,22.4543 10.7151,22.4543 10.069,20.6372 C9.66203,19.4929 8.35491,18.9515 7.25803,19.4729 C5.51625,20.3008 3.69918,18.4837 4.52713,16.742 C5.04852,15.6451 4.5071,14.338 3.3628,13.931 C1.54573,13.2849 1.54573,10.7151 3.36281,10.069 C4.5071,9.66203 5.04852,8.35491 4.52713,7.25803 C3.69918,5.51625 5.51625,3.69918 7.25803,4.52713 C8.35491,5.04852 9.66203,4.5071 10.069,3.36281 Z"
          id="Path"
          stroke="#0C0310"
          stroke-width="2"
          stroke-linecap="round"
          class="child"></path>
      </g>
    </g>
  </svg>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  name: String,
  w: String,
  h: String,
});
</script>

<style lang="scss" scoped></style>
