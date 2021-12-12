<template>
  <div>
    <div class="bg"></div>
    <img src="../assets/pokemon.png" class="logo">
    <!--<button v-on:click="logg">Console log</button> <br/>

    <button v-on:click="show = true">Apparaitre</button>
    <button v-on:click="show = false">Disparaitre</button>
    <p v-if="show">Le texte apparait</p> <br><br>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png" id="imageSource"><br>
    <button v-on:click="changeImage">Changer l'image</button>

    <br><button v-on:click="addText">Ajouter du texte</button>
    <div id="divText"></div>

    <p>{{this.info}}</p>-->

    <input v-on:change="changePk" type="number" value="1" class="pokemonInput">

    <div class="pokemonCard">
      <div>
        <img :src="this.image">
      </div>
      <div>
        <p><strong>Nom:</strong> {{this.name}}</p>
        <p><strong>Id:</strong> {{this.id}}</p>
        <p><strong>Taille:</strong> {{this.height}}</p>
        <p><strong>Poids:</strong> {{this.weight}}</p>
        <p><strong>Types:</strong></p>
        <li v-for="value in this.types">{{value.type.name}}</li>
        <p><strong>Abilités:</strong></p>
        <li v-for="item in this.abilities">{{item.ability.name}}</li>
      </div>
      
    </div>

  </div>
</template>



<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      name:null,
    }
  }, methods:{
    logg: function(event){
    console.log("Test")
},
  changeImage: function(event){
    var i = document.getElementById("imageSource");
    if (i.src == "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"){
      i.src = "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg";
      console.log(i.src);
    } else {
      i.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
    }
  },
  addText: function(event){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "Ceci est du texte ajouté"
    var currentDiv = document.getElementById("divText");
    currentDiv.appendChild(newDiv)
  },
changePk: function(event){
  var url = "https://pokeapi.co/api/v2/pokemon/" + event.target.value
  console.log(url)

  axios
      .get(url)
      .then(response => {
        this.name = response.data.name
        this.image = response.data.sprites.front_default
        this.height = response.data.height
        this.abilities = response.data.abilities
        this.types = response.data.types
        this.weight = response.data.weight
        this.id = response.data.id
})
  }
},

  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1")
      .then(response => {
        this.name = response.data.name
        this.image = response.data.sprites.front_default
        this.height = response.data.height
        this.abilities = response.data.abilities
        this.types = response.data.types
        this.weight = response.data.weight
        this.id = response.data.id
})
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only

-->
<style scoped>

body{
  margin: 0 !important;
  padding: 0;
  overflow-x: hidden;
}

.logo{
  width: 25vw;
  display: block;
  margin:auto;
}

.pokemonInput{
  margin-bottom: 5vh;
  width: 25vw;
  height: 5vh;
  border: 1px solid black;
  border-radius: 3px;
  font-family: Verdana, sans-serif;
  display: block;
  margin: 25px auto;
}

input[type=number] {
  padding: 0 25px;
}

.pokemonCard{
    text-transform: uppercase;
    background-color: white;
    width: 40vw;
    display: flex;
    margin: auto;
    border-radius: 3px;
    padding-bottom: 3vh;
    margin-bottom: 20vh;
    border: 1px solid black;
    font-family: Verdana, sans-serif;
}

.pokemonCard img{
    width: 15vw;
}

.bg{
  background-image: url("https://i.imgur.com/Ygr20aY.jpg?fb");
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
  filter: blur(3px);
}

</style>