<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">NASA INTERVIEW</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <BreadCrumb />
      </div>
    </nav>
  </div>
</template>
<script>
import BreadCrumb from '../components/Breadcrumbs'
export default {
  name: "Header",
  components:{BreadCrumb},

};
</script>