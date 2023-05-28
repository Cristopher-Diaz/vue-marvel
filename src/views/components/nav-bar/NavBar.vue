<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-container>
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>BootstrapVue</b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <b-button class="me-2" variant="warning"><router-link class="link" to="/">Home</router-link></b-button>
                    <b-button variant="warning"><router-link class="link" to="/about">About</router-link></b-button>
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