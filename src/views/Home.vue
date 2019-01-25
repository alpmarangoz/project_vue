<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">

        <md-card>
          <md-card-media>
            <img src="@/assets/img/olu-eletu.jpg" alt="People">
          </md-card-media>

          <md-card-header>
            <div class="md-title">Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>

          <md-card-content>
            Second ..Lorem ipsum dolor sit amet
          </md-card-content>
        </md-card>
      </div>
    </parallax>    
  </div>
</template>

<script>
export default {
  bodyClass: "trial-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/beautiful-bloom-blooming-for-trial.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.md-card {
  width: 240px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
