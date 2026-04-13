<template>
  <div class="d-flex flex-column w-100 h-100">
    <div class="img-container">
      <p class="skeleton-loader skeleton-image" />
    </div>
    <div class="card-body position-relative">
      <div class="position-absolute bg-white mx-auto over-content">
        <div class="text-center px-4 pt-4">
          <p class="skeleton-loader skeleton-text" />
          <div
            class="d-flex justify-content-center align-items-center mt-4 mb-3"
          >
            <p class="skeleton-loader skeleton-text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11rem;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.card-body {
  margin-bottom: 6rem;
}

.over-content {
  width: 85%;
  left: 0;
  right: 0;
  bottom: -5rem;
  border-radius: 4px;
}

.shadow {
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px lightgrey;
}

.skeleton-loader {
  animation: skeleton-loading 1s ease-in-out infinite;
  background-color: #ccc;
  background-image: linear-gradient(90deg, #ccc, #fff, #ccc);
  background-size: 200%;
  height: 200px;
  margin-bottom: 5px;
  border-radius: 5px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200%;
  }
  100% {
    background-position: 0%;
  }
}

.skeleton-image {
  width: 100%;
  height: 100%;
}

.skeleton-text {
  width: 100%;
  height: 1.5rem;
}
</style>
