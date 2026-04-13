<template>
  <b-jumbotron>
    <div class="container-fluid text-white">
      <slot name="content">
        <b-row>
          <b-col cols="12" xl="7" sm="9">
            <h1 class="display-3">
              <vue-typer
                :text="title"
                erase-style="backspace"
                :erase-delay="70"
              ></vue-typer>
              <span class="slash blink text-primary"></span>
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" xl="6" sm="6" v-html="lead"> </b-col>
        </b-row>
      </slot>
    </div>
  </b-jumbotron>
</template>
<script>
export default {
  props: ['title', 'lead', 'button']
}
</script>
