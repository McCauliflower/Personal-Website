<template>
  <header>
    <nav id="cssmenu">
      <ul class="hidemenu">
        <!-- <a href="/"
          ><img
            id="fullZicon"
            src="images/cauliflower.png"
            width="120px"
            height="auto"
            alt="Icon"
        /></a> -->
        <li class="active">
          <router-link id="one" to="/art">Art</router-link>
        </li>
        <li><router-link id="two" to="/code">Code</router-link></li>
        <!-- <li>
          <a id="three" href="#">Portfolio</a>
          <ul>
            <li class="active">
              <a id="dropone" href="/websites">Websites</a>
            </li>
            <li><a id="droptwo" href="/logos">Logo Design</a></li>
            <li><a id="dropthree" href="/ads">Advertisements</a></li>
            <li><a id="dropfour" href="/photography">Photography</a></li>
            <li><a id="dropfive" href="/videography">Videography</a></li>
          </ul>
        </li> -->
        <!-- <li><a id="four" href="/contact">Contact</a></li> -->
      </ul>
    </nav>
    <!--end "nav"-->

    <!-- <div id="hamburgerz">
      <a id="nav-toggle" href="#"><span></span></a>

      <ul id="hamburgermenu">
        <li id="hamburger">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/logos">Logo Design</a></li>
            <li><a href="/photography">Photography</a></li>
            <li><a href="/videography">Videography</a></li>
            <li><a class="pad" href="/contact">Contact Us</a></li>
          </ul>
        </li>
      </ul>
    </div> -->
  </header>
</template>

<script>
export default {
  name: "NavMenu"
};
</script>

<style lang="scss" scoped>
@import url(navmenu.css);
</style>
