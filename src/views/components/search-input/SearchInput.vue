<template>
    <b-nav-form>
        <b-form-input size="sm" class="mr-md-2" placeholder="ej: Iron Man" v-model="nameSearch"></b-form-input>
        <b-button size="sm" class="my-2 my-md-0" type="button" @click="btnSearch">Búsqueda</b-button>
    </b-nav-form>
</template>

<script>
export default {
    data() {
        return {
            nameSearch: ''
        }
    },
    methods: {
        btnSearch() {
            this.$emit('search', this.nameSearch)
        }
    }
}
</script>