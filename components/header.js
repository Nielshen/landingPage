export const HeaderComponent = {
    template: `
        <header>
            <div class="header-content">
                <div class="logo" @click="navigateToHome">
                    <img src="../assets/logo.svg" alt="Logo" style="cursor: pointer;">
                </div>
                <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav :class="{ 'active': isMenuOpen }">
                    <ul>
                        <li><a href="https://webwai.de/#services">Leistungen</a></li>
                        <li><a href="https://webwai.de/#portfolio">Portfolio</a></li>
                        <li><a href="https://webwai.de/#about">Über mich</a></li>
                        <li><a href="https://webwai.de/#security">Sicherheit & Support</a></li>
                        <li><a href="https://webwai.de/#contact">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `,
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        navigateToHome() {
            window.location.href = 'https://webwai.de';
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};