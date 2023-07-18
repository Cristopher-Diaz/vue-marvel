<template>
    <div>
        <p>{{character}}</p>
    </div>
</template>

<script>
import CharactersService from "./characters.service";

export default {
    data() {
        return {
            charactersService: new CharactersService(this),
            character: null
        }
    },
    methods: {
        getCharacter() {
            this.charactersService.callService('getCharacter', {character_id: this.$route.params.id})
                .then(res => this.character = res.data.data.results)
        }
    },
    mounted() {
        this.getCharacter()
    }
}
</script>

<style>

</style>