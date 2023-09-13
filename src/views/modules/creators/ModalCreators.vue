<template>
  <b-modal id="details">
    <h1>{{dataCreator.title}}</h1>
    <img :src="dataCreator.thumbnail.path + '.' + dataCreator.thumbnail.extension" >
  </b-modal>
</template>

<script>
export default {
    name:"modalCreators",
    props:['dataCreator']

}
</script>

<style>
img{
   width: 100%; 
}
</style>