
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <ul>
                    <li><a href="/static">HOME</a></li>
                    <li><a>PROJECTS</a></li>
                    <li><a>SKILLS</a></li>
                    <li><a>TESTIMONIALS</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </header>
        `;
    }
}

customElements.define('header-component', Header);