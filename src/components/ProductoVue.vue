<template>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Portfolio</h2>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="product-item portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
              <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
            </a>
            <div class="down-content portfolio-caption">
              <div class="portfolio-caption-heading">Threads</div>
              <h6>$25.75</h6>
              <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
              <ul class="stars">
                <li><i class="fa fa-star" style='color: #f3da35'></i></li>
                <li><i class="fa fa-star" style='color: #f3da35'></i></li>
                <li><i class="fa fa-star" style='color: #f3da35'></i></li>
                <li><i class="fa fa-star" style='color: #f3da35'></i></li>
                <li><i class="fa fa-star" style='color: #f3da35'></i></li>
              </ul>
              <span>Reviews (24)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductoVue"
}
</script>

<style scoped>

</style>