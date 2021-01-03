<template>
  <!-- bloc-0 -->

  <!-- bloc-1 -->
  <div class="bloc l-bloc full-width-bloc" id="bloc-7">
    <div class="container bloc-no-padding">
      <div class="row voffset-clear-xs no-gutters">
        <div class="col-12">
          <div
            id="carousel-46240"
            class="carousel slide carousel-fade"
            data-ride="carousel"
            data-interval="1000"
          >
            <ol class="carousel-indicators">
              <li data-target="#carousel-46240" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-46240" data-slide-to="1"></li>
              <li data-target="#carousel-46240" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img
                  class="d-inline-block w-100"
                  alt="slide 1"
                  src="../assets/img/catherine-heath-DBhIAuHyjPM-unsplash.jpg"
                />
                <div class="carousel-caption"></div>
              </div>
              <div class="carousel-item">
                <img
                  alt="slide 2"
                  class="d-inline-block w-100"
                  src="../assets/img/george-pagan.jpg"
                />
                <div class="carousel-caption">
                  <h3 class="mg-md"><span class="fa fa-star"></span> Heading content</h3>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-inline-block w-100"
                  alt="slide 3"
                  src="../assets/img/sam-moqadam.jpg"
                />
                <div class="carousel-caption">
                  <h3 class="mg-md">Heading content</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                    consequat massa quis enim.
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-nav-controls carousel-control-prev"
              href="#carousel-46240"
              role="button"
              data-slide="prev"
              ><svg width="26" height="26" viewBox="0 0 32 32">
                <path
                  class="carousel-nav-icon carousel-prev-icon"
                  d="M22,2L9,16,22,30"
                ></path></svg
              ><span class="sr-only">Previous</span></a
            ><a
              class="carousel-nav-controls carousel-control-next"
              href="#carousel-46240"
              role="button"
              data-slide="next"
              ><svg width="26" height="26" viewBox="0 0 32 32">
                <path
                  class="carousel-nav-icon carousel-next-icon"
                  d="M10.344,2l13,14-13,14"
                ></path></svg
              ><span class="sr-only">Next</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- bloc-1 END -->
  <!-- bloc-2 -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
