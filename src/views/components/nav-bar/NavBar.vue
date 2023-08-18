<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <b-container>
            <b-navbar-brand>MARVEL API</b-navbar-brand>
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item v-for="(route, index) in filteredRoutes" :key="index">
                        <router-link class="link" :to="route.path">
                            <b-button block variant="primary">
                                <span>{{ route.label }}</span>
                                <b-icon 
                                    v-if="route.icon" 
                                    class="ml-1"
                                    :variant="route.icon?.variant ? route.icon?.variant : 'dark'" 
                                    :icon="route.icon.icon">
                                </b-icon> 
                            </b-button>
                        </router-link> 
                    </b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <search-input @search="searchFilter" :loadingSearch="loading.search"></search-input>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
  </div>
</template>

<script>
import marvelRoutes from '@/router/routes/marvel-routes'
import CharactersService from "../../modules/characters/characters.service"
import ComicsService from "../../modules/comics/comics.service"
import CreatorsService from "../../modules/creators/creators.service"
import EventsService from "../../modules/events/events.service"
import SeriesService from "../../modules/series/series.service"
import StoriesService from "../../modules/stories/stories.service"

export default {
    data () {
        return {
            marvelRoutes,
            charactersService: new CharactersService(this),
            comicsService: new ComicsService(this),
            creatorsService: new CreatorsService(this),
            eventsService: new EventsService(this),
            seriesService: new SeriesService(this),
            storiesService: new StoriesService(this),
            allData : [],
            searchFiltered: [],
            loading: {
                search: false
            }
        }
    },
    methods: {
        /**
         * Función que realiza el llamado a las apis y llena de información el array allData
         */
        async marvelInfo() {
            try {
                const charactersRes = await this.charactersService.callService('getCharacters', {}, {limit: 100})
                const comicsRes = await this.comicsService.callService('getComics', {}, {limit: 100})
                const creatorsRes = await this.creatorsService.callService('getCreators', {}, {limit: 100})
                const eventsRes = await this.eventsService.callService('getEvents', {}, {limit: 100})
                const seriesRes = await this.seriesService.callService('getSeries', {}, {limit: 100})
                const storiesRes = await this.storiesService.callService('getStories', {}, {limit: 100})

                const charactersArray = charactersRes.data.data.results
                const comicsArray = comicsRes.data.data.results
                const creatorsArray = creatorsRes.data.data.results
                const eventsArray = eventsRes.data.data.results
                const seriesArray = seriesRes.data.data.results
                const storiesArray = storiesRes.data.data.results

                charactersArray.forEach(data => this.allData.push(data))
                comicsArray.forEach(data => this.allData.push(data))
                creatorsArray.forEach(data => this.allData.push(data))
                eventsArray.forEach(data => this.allData.push(data))
                seriesArray.forEach(data => this.allData.push(data))
                storiesArray.forEach(data => this.allData.push(data))
            } catch (error) {
                console.log(error)
            }
        },

        /**
         * Función que realiza el llamado a las apis, en base a ese array con información llevar a cabo la búsqueda cambiando la vista para mostrar dicha información
         * @param { String } search Value del input de búsqueda
         */
        async searchFilter(search) {
            this.loading.search = true
            this.allData = []
            this.$router.push('/spinner')
            await this.marvelInfo()
            this.searchFiltered = this.filterStrings(search)
            this.loading.search = false
            this.$router.push({
                name: 'SearchView',
                params: { relatedSearches: JSON.stringify(this.searchFiltered) }
            })   
        },

        /**
         * Funcion que retorna un array de objs filtrados de acuerdo al parámetro search
         * @param { String } search Value del input de búsqueda
         */
        filterStrings(search) {
            const searchClean = this.cleanStrings(search)
            const filter = this.allData.filter(info => {
                if(info.firstName && this.cleanStrings(info.firstName).includes(searchClean)) {
                    return true
                }
                if(info.name && this.cleanStrings(info.name).includes(searchClean)) {
                    return true
                }
                if(info.title && this.cleanStrings(info.title).includes(searchClean)) {
                    return true
                }
                return false
            })
            return filter
        },

        /**
         * Retorna un string limpio de carácteres especiales, mayúsculas y espacios vacíos
         * @param { String } str String que va a pasar por la fn
         */
        cleanStrings(str) {
            return str.normalize('NFD').replace(/[^\w]/g, '').toLowerCase()
        }
    },
    computed: {
        /** 
         * Retorna un array filtrando solamente las rutas estáticas
         */
        filteredRoutes() {
            return marvelRoutes.filter(route => route.show_in_nav)
        }
    }
}
</script>

<style scoped>
    .link {
        text-decoration: none;
        color: inherit;
    }
</style>