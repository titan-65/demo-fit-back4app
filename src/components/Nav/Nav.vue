<template>
  <!-- bloc-0 -->
  <div class="bloc bloc-fill-screen b-parallax full-width-bloc l-bloc" id="bloc-0">
    <div class="parallax bg-charles-gaudreault-xXofYCc3hqc-unsplash"></div>
    <div class="container fill-bloc-top-edge sticky-nav">
      <div class="row">
        <div class="col-12">
          <nav class="navbar row navbar-expand-md navbar-light" role="navigation">
            <router-link class="navbar-brand" to="/"
              ><img src="../../assets/img/fit4appp.png" alt="logo"
            /></router-link>
            <button
              id="nav-toggle"
              type="button"
              class="ui-navbar-toggler navbar-toggler border-0 p-0 mr-md-0 ml-auto"
              data-toggle="collapse"
              data-target=".navbar-32154"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navbar-32154">
              <ul class="site-navigation nav navbar-nav ml-auto">
                <li class="nav-item">
                  <router-link to="/teams" class="a-btn nav-link ltc-taupe-gray"
                    >Teams</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/workout" class="a-btn nav-link ltc-taupe-gray"
                    >WorkOut
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="mg-md text-center tc-platinum">Fit4App</h1>
          <h3 class="mg-md float-none text-center tc-platinum">
            Building a rock solid core requires more than just a gym, it requires focus
            and fit4.
          </h3>
          <div class="text-center">
            <router-link to="/" class="btn btn-lg btn-white">Get Started</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container fill-bloc-bottom-edge">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <a href="#" data-scroll-speed="1000" onclick="scrollToTarget('0',this)"
              ><span class="fa fa-angle-down icon-md animated bounce animDelay08"></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- bloc-0 END -->
</template>

<script>
export default {
  name: 'Nav',
}
</script>
