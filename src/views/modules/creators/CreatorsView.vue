<template>
  <div>
    <b-container>
    <gallery-render :galleryData="marvelData"></gallery-render>
    <pagination-nav class="d-flex flex-column justify-content-center align-items-center mt-5"></pagination-nav>
    </b-container>
  </div>
</template>

<script>
import CreatorsService from "./creators.service";
export default {
    name:'creatorsView',
    data(){
        return{
            creatorsService: new CreatorsService(this),
            marvelData: [],
        }
    },
    methods: {
        getCreators(){
          this.creatorsService.callService('getCreators', {}, {})
          .then(res => {
            this.marvelData = res.data.data.results.map(element =>{
              return {
                ...element,
                title: element.fullName,
                date: element.modified,
                description: element.description
              }
            })
          })
        }
    },
    mounted(){
      this.getCreators()
    }
}
</script>

<style></style>
