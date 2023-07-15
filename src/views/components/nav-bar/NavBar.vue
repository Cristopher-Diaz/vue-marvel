<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <b-container>
            <b-navbar-brand>MARVEL API</b-navbar-brand>
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <b-button block variant="primary"><router-link class="link" to="/">Home</router-link></b-button>
                    </b-nav-item>
                    <b-nav-item>
                        <b-button block variant="primary"><router-link class="link" to="/about">About</router-link></b-button>
                    </b-nav-item>
                    <b-nav-item>
                        <b-button block variant="primary"><router-link class="link" to="/characters">Personajes</router-link></b-button>
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
export default {
}
</script>

<style scoped>
    .link {
        text-decoration: none;
        color: inherit;
    }
</style>