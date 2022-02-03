<template>
        <div class="col-md-4">
          <div class="product-item portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="bi bi-plus-lg"></i></div>
              </div>
              <img class="img-fluid" src="@/assets/img/portfolio/1.jpg" alt="..." />
            </a>
            <div class="down-content portfolio-caption">
              <div class="portfolio-caption-heading">Threads</div>
              <h6>$25.75</h6>
              <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
              <ul class="stars">
                <li><i class="bi bi-star-fill" style='color: #f3da35'></i></li>
                <li><i class="bi bi-star-fill" style='color: #f3da35'></i></li>
                <li><i class="bi bi-star-fill" style='color: #f3da35'></i></li>
                <li><i class="bi bi-star-fill" style='color: #f3da35'></i></li>
                <li><i class="bi bi-star-fill" style='color: #f3da35'></i></li>
              </ul>
              <span>Reviews (24)</span>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "ProductoVue",
  props: ['articulo']
}
</script>

<style scoped>

</style>