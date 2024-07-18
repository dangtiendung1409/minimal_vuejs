<template>
    <div class="lines-wrap">
        <div class="lines-inner">
            <div class="lines"></div>
        </div>
    </div>
    <!-- END lines -->

    <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close">
                <span class="icofont-close js-menu-toggle"></span>
            </div>
        </div>
        <div class="site-mobile-menu-body"></div>
    </div>

    <nav class="site-nav dark mb-5 site-navbar-target">
        <div class="container">
            <div class="site-navigation">
                <router-link :to="{name: 'user-home'}" style="font-family: 'PT Mono', monospace" class="logo m-0">Minimal<span class="text-primary">.</span></router-link>

                <ul class="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
                    <li><a href="#home-section" class="nav-link active">Home</a></li>
                    <li><a href="#portfolio-section" class="nav-link">Portfolio</a></li>
                    <li class="has-children">
                        <a href="#about-section" class="nav-link">About</a>
                        <ul class="dropdown">
                            <li><a href="elements.html" class="nav-link">Elements</a></li>
                            <li class="has-children">
                                <a href="#">Menu Two</a>
                                <ul class="dropdown">
                                    <li><a href="#" class="nav-link">Sub Menu One</a></li>
                                    <li><a href="#" class="nav-link">Sub Menu Two</a></li>
                                    <li><a href="#" class="nav-link">Sub Menu Three</a></li>
                                </ul>
                            </li>
                            <li><a href="#" class="nav-link">Menu Three</a></li>
                        </ul>
                    </li>
                    <li><a href="#services-section" class="nav-link">Services</a></li>

                    <li><a href="#contact-section" class="nav-link">Contact us</a></li>
                </ul>

                <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block" data-toggle="collapse" data-target="#main-navbar">
                    <span></span>
                </a>

            </div>
        </div>
    </nav>
</template>
<style scoped>


body, html {
    font-family: 'PT Mono', monospace;
}
</style>
