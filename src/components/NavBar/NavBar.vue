<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item item-1">
        <router-link :to="homeRoute" class="nav-link">
          <component :is="routeIconHome" size="large"></component>
          <span class="link-text">Startseite</span>
        </router-link>
      </li>
      <li class="nav-item item-2">
        <router-link :to="pedagogicalPriciplesRoute" class="nav-link">
          <span class="link-text">Pädagogische Grundsätze</span>
        </router-link>
      </li>
      <li class="nav-item item-3">
        <router-link :to="practicalImplementationRoute" class="nav-link">
          <span class="link-text">Praktische Umsetzung</span>
        </router-link>
      </li>
      <li class="nav-item item-4">
        <router-link :to="teamRoute" class="nav-link">
          <span class="link-text">Team</span>
        </router-link>
      </li>
      <li class="nav-item item-5">
        <router-link :to="historyRoute" class="nav-link">
          <span class="link-text">Geschichte</span>
        </router-link>
      </li>
      <li class="nav-item item-6">
        <router-link :to="signUpRoute" class="nav-link">
          <span class="link-text">Anmeldung</span>
        </router-link>
      </li>
      <li class="nav-item item-7">
        <router-link :to="directionsRoute" class="nav-link">
          <span class="link-text">Anfahrt</span>
        </router-link>
      </li>
      <li class="nav-item login">
        <label><input id="name" placeholder="Name eingeben" /></label>
        <label name="password"><input id="pwd" placeholder="Passwort" /></label>
        <button id="login">Login</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      routeIconHome: "md-home-icon",
      homeRoute: "/",
      pedagogicalPriciplesRoute: "/pedagogicalPrinciples",
      practicalImplementationRoute: "/practicalImplementation",
      teamRoute: "/team",
      historyRoute: "/history",
      signUpRoute: "/signUp",
      directionsRoute: "/directions",
    };
  },
};
</script>

<style lang="scss">
.navbar {
  z-index: 2;
  width: 2rem;
  height: 100vh;
  position: fixed;
  background-color: var(--bright);
  transition: 200ms ease-in-out;
  box-shadow: rgba(150, 150, 150, 0.12) 0px 0.5px 1.5px,
    rgba(0, 0, 0, 0.24) 0px 0.5px 1px;
}
.navbar:hover {
  width: 14rem;
  .link-text {
    display: block;
    justify-content: baseline;
    align-items: baseline;
  }
  .login {
    display: flex;
    flex-flow: column;
    button {
      margin: 0.5rem;
    }
    input {
      margin: 0.5rem;
      width: 89%;
    }
  }
}
.navbar-nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
}
.nav-item:last-child {
  margin-top: auto;
  text-align: left;
  padding: 0.5rem;
  margin-left: 0.25rem;
}
.login {
  display: none;
}

.nav-item {
  width: 100%;
}
.nav-link {
  display: flex;
  align-items: center;
  height: 4rem;
  text-decoration: none;
  color: var(--dark);
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  svg {
    min-width: 1rem;
    fill: var(--primary-color);
    transition: 0.5s ease-in-out;
    font-size: 1.7rem;
    margin: 0 1.2rem;
    margin-top: 0.3rem;
  }
  img {
    max-width: 2rem;
    margin: 0 1rem;
  }
  span {
    margin-top: 0.3rem;
  }
}
.nav-link:hover,
.nav-link:active {
  _background: var(--green);
  color: var(--dark);
}
.item-1:hover {
  background: var(--green);
}
.item-2:hover {
  background: var(--yellow);
}
.item-3:hover {
  background: var(--blue);
}
.item-4:hover {
  background: var(--red);
}
.item-5:hover {
  background: var(--purple);
}
.item-6:hover {
  background: var(--orange);
}
.item-7:hover {
  background: var(--green);
}

.gitHub:hover,
.gitHub:active {
  background: var(--primary-color-light);
  color: var(--dark);
}
.nav-link:hover {
  border-bottom: 0.5px solid var(--primary-color-light);
  border-top: 0.5px solid var(--primary-color-light);
}
a {
  &.router-link-active:first-child {
    background: var(--blue);
    color: var(--dark);
  }
  &.router-link-active > div > svg {
    fill: var(--primary-color-light);
  }
}

.link-text {
  display: none;
  margin-left: 0.5rem;
  margin-bottom: 0.4rem;
  font-weight: bold;
}
@media screen and (min-width: 950px) {
  .navbar {
    z-index: 1;
    width: 14rem;
    height: 100vh;
    position: fixed;
    background-color: rgb(238, 238, 238);
    transition: 200ms ease-in-out;
    box-shadow: rgba(150, 150, 150, 0.12) 0px 0.5px 1.5px,
      rgba(0, 0, 0, 0.24) 0px 0.5px 1px;
  }
  .link-text {
    display: block;
    justify-content: baseline;
    align-items: baseline;
  }
  .login {
    display: flex;
    flex-flow: column;
    button {
      margin: 0.5rem;
    }
    input {
      margin: 0.5rem;
      width: 89%;
    }
  }
}
</style>
