<template>
    <b-nav-form @submit.prevent>
        <b-form-input size="sm" class="mr-md-2" placeholder="ej: Iron Man" v-model="nameSearch" @keydown.enter="keySearch"></b-form-input>
        <b-button size="sm" class="my-2 my-md-0" type="button" @click="btnSearch" :disabled="loadingSearch">Busca</b-button>
    </b-nav-form>
</template>

<script>
export default {
    /**
   * loadingSearch: Booleano encargado de bloquear el botón mientras se realiza la búsqueda
   */
    props: {
        loadingSearch: {
            type: Boolean
        }
    },
    data() {
        return {
            nameSearch: ''
        }
    },
    methods: {
        btnSearch() {
            this.$emit('search', this.nameSearch)
        },
        keySearch() {
            this.$emit('btnSearch', this.nameSearch)
        }
    }
}
</script>