<template>
  <div>
    <b-container>
      <gallery-render :galleryData="marvelData" :loadingCard="loading.card" @sendData="btnInfo"></gallery-render>
      <pagination-nav
        class="d-flex flex-column justify-content-center align-items-center mt-5" :totalRows="rows" :perPage="perPage" @page-changed="currentPage" :showSelect="true" @amount-characters="numberCreators"></pagination-nav>
    </b-container>
    <modal-details :dataCreator="detailsCreator"></modal-details>
  </div>
</template>

<script>
import CreatorsService from "./creators.service";
import ModalDetails from "./ModalCreators.vue"
export default {
  name: "creatorsView",
  components:{ModalDetails},
  data() {
    return {
      creatorsService: new CreatorsService(this),
      marvelData: [],
      detailsCreator:{},
      rows: null,
      perPage: null,
      actualPage: null,
      amountCharacters: null,
      loading: {
        card: false,
      },
    };
  },
  methods: {
    btnInfo(data){
      this.detailsCreator = data
      console.log(this.detailsCreator)
      this.$bvModal.show('details')
    },
    getCreators(urlParams, firstLoad) {
      this.creatorsService.callService("getCreators", {}, urlParams)
      .then(res => {
        this.loading.card = true
        this.marvelData = res.data.data.results.map((element) => {
          return {
            ...element,
            title: element.fullName,
            date: element.modified,
            description: element.description,
          };
        });
        if(firstLoad){
          this.actualPage = 1
          this.rows = res.data.data.total
          this.perPage = res.data.data.limit
        }
      });
    },
    currentPage(page) {
      this.scrollToTop()
      this.actualPage = page
      this.getCreators({offset: ((this.perPage * page) - this.perPage), limit: this.amountCharacters ? this.amountCharacters : 20 })
    },
    numberCreators(amount) {
      this.scrollToTop()
      this.perPage = amount
      this.amountCharacters = amount
      this.getCreators({offset: ((this.actualPage * amount) - amount), limit: amount })
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  },
  mounted() {
    this.getCreators({offset: 0}, true);
  },
};
</script>

<style></style>
