<template>
  <div> 
    <div>
      <h1 class="titulo">Loja de Produtos</h1>
      <Carrinho :carrinho="carrinho" />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div v-for="(produto, index) in produtos" :key="index" class="col-4 mb-6">
          <div >
            <v-card max-width="500" class="ma-4" >
              <router-link :to="`/ecommerce/${produto.id}`">
                <v-img height="200px" :src="produto.foto"></v-img>
                <v-card-title>{{ produto.nome }}</v-card-title>
                <v-card-subtitle class="pb-0">{{ produto.preco | valorMonetario}}</v-card-subtitle>
                <v-card-text class="text--primary descricao">
                  <div>{{ produto.descricao }}</div>
                </v-card-text>
              </router-link>
              <v-card-actions>
                <v-btn color="orange" @click="carrinho.push(produto)" :name="produto" >Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Carrinho from '@/components/Carrinho';

export default {
  components: {
    Carrinho
  },
  data(){
    return {
      produtos: [],
      carrinho: []
    }
  },
  async created() {
    this.produtos = await this.buscarProdutos();
  },
  methods: {
    async buscarProdutos(){
      const { data } = await axios.get('http://localhost:3000/produtos');
      return data;
    }
  }
}
</script>

<style lang="scss" scoped>
  .titulo{
    text-align: center;
    margin-bottom: 2rem;
  }
  .descricao {
    max-width: 44ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>