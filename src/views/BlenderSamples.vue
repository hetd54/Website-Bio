<template>
  <h2>Created Images using Blender 3D</h2>
  <p>Click on an image to open it in a new tab!</p>
  <div class="carousel">
    <div class="card" v-for="(image, index) in images" :key="index">
      <img :src="getImgUrl(image.src)" :alt="image.alt" @click="openImage" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: "1",
          src: "donut2.8_2.png",
          alt: "Two donuts sitting on a plate",
        },
        {
          id: "2",
          src: "lowpoly-island.png",
          alt: "Low-polygon count floating island with trees",
        },
        {
          id: "3",
          src: "blt-logo.png",
          alt: "Language and Thought bubbles made from glowing dots",
        },
      ],
      currentIndex: 0,
    };
  },

  methods: {
    getImgUrl: function (path) {
      return require("@/assets/" + path);
    },
    openImage: function (event) {
      const clickedImage = event.target;
      window.open(clickedImage.src, "_blank");
    },
  },
};
</script>

<style>
.carousel {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.card img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0px 0px 100px grey;
}
</style>
