<template>
  <!-- <h1>Produtos</h1> -->
  <div class="row promo-top hidden-xs">
    <div class="col-xs-12 col-sm-6 col-md-6 text-center">
      <div class="promo-item">
        <img src="../assets/img/barcode.png" /> <span>Cartão de Crédito em 12x</span>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 text-center">
      <div class="promo-item">
        <img src="../assets/img/barcode.png" />
        <span>10% off ou no boleto ou pix</span>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 text-center">
      <div class="promo-item">
        <img src="../assets/img/barcode.png" />
        <span>Frete Grátis para Sul e Sudeste</span>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 text-center">
      <div class="promo-item">
        <img src="../assets/img/barcode.png" />
        <span>Cartão de Crédito em 12x</span>
      </div>
    </div>
  </div>

  <div class="product-details">
    <div class="container">
      <div class="grid-img col-xs-12 col-sm-6 col-md-6">
        <div class="" v-for="product in products" :key="product.id">
          <img :src="product.imageName" />
          <!-- <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <button>Ver Detalhes</button> -->
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <div class="" v-for="product in products" :key="product.id">
          <!-- <img :src="product.imageName" /> -->
          <h3 class="product-name">{{ product.name }}</h3>
          <div class="tamanho-bike">
            <h3>Tamanho do quadro</h3>
            <div class="tamanho-btn">
              <button class="tamanho-btn">15.5"</button>
              <button class="tamanho-btn">17"</button>
              <button class="tamanho-btn">19"</button>
              <button class="tamanho-btn">21"</button>
            </div>
          </div>
          <div class="cor-bike">
            <h3>Escolha a cor</h3>
            <div class="cor-btn">
              <button class="cor-btn"><img :src="product.imageName" /></button>
              <button class="cor-btn"><img :src="product.imageName" /></button>
              <button class="cor-btn"><img :src="product.imageName" /></button>
              <button class="cor-btn"><img :src="product.imageName" /></button>
            </div>
          </div>
          <div class="produto-preco">
            <h3></h3>
            <div class="produto-price-row">
              <p class="product-price-old">{{ product.priceOld }}</p>
              <p class="product-price">{{ product.price }}</p>
            </div>
          </div>
          <div class="meios-pagamentos">
            <h3>À vista no Pix ou Boleto ou até 12x de R$ 259,91 com juros</h3>
            <div class="meios-pagamentos-row">
              <div class="mid-mid">
                <img src="../assets/img/barcode.png" />
                <p class="product-price">Cartão de Crédito</p>
              </div>
              <div class="mid-mid">
                <img src="../assets/img/barcode.png" />
                <p class="product-price">Cartão de Crédito</p>
              </div>
              <div class="mid-mid">
                <img src="../assets/img/barcode.png" />
                <p class="product-price">Cartão de Crédito</p>
              </div>
              <div class="mid-mid">
                <img src="../assets/img/barcode.png" />
                <p class="product-price">Cartão de Crédito</p>
              </div>
            </div>
          </div>
          <button class="btn-buy">COMPRAR AGORA</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../temp-data";

export default {
  name: "ProductsPage",
  data() {
    return {
      products,
    };
  },
};
</script>

<style>
.promo-top {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.product-details > .container {
  display: flex;
  /* flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center; */
}

.grid-img img {
  width: -webkit-fill-available;
}
.promo-top img {
  width: 2rem;
}

.meios-pagamentos-row {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
}

.mid-mid {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: baseline;
}
</style>
