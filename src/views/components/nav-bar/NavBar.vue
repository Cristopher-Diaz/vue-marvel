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
                    <search-input @search="inputValue"></search-input>
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
            allData : []
        }
    },
    methods: {
        inputValue(search) {
            console.log(search)
            this.charactersService.callService('getCharacters', {}, {})
                .then(res => console.log(res.data.data.results))
            this.comicsService.callService('getComics')
                .then(res => console.log(res.data.data.results))
            this.creatorsService.callService('getCreators')
                .then(res => console.log(res.data.data.results))
            this.eventsService.callService('getEvents')
                .then(res => console.log(res.data.data.results))
            this.seriesService.callService('getSeries')
                .then(res => console.log(res.data.data.results))
            this.storiesService.callService('getStories')
                .then(res => console.log(res.data.data.results))
        }
    },
    computed: {
        filteredRoutes() {
            // Filtrar las rutas dinámicas con una regex
            const dynamicRoutePattern = /:\w+/
            return this.marvelRoutes.filter(route => !dynamicRoutePattern.test(route.path))
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