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
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-md-2" placeholder="ej: Iron Man"></b-form-input>
                        <b-button size="sm" class="my-2 my-md-0" type="submit">Búsqueda</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
  </div>
</template>

<script>
import marvelRoutes from '@/router/routes/marvel-routes'

export default {
    data () {
        return {
            marvelRoutes
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