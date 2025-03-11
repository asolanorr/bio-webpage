class SkillComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const skillName = this.getAttribute('skill-name');
        const experience = this.getAttribute('experience');

        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
                <span class="line"></span>
                <p class="name">${skillName}</p>
                <p class="experience">${experience}</p>
        `;
        wrapper.className = 'skill';

        const style = document.createElement('style');
        style.textContent = `
            .skill {
                position: relative;
                display: flex !important;
                align-items: center;
                flex-direction: row;
                padding: 1rem;
                margin: 1rem;
                z-index: 10;
            }
            .line {
                position: absolute;
                top: 3rem;
                width: 100%;
                height: 1rem;
                background-color: #f1c40f;
            }
            .name {
                font-size: 1.5rem;
                font-weight: bold;
                margin-right: 2rem;
                z-index: 10;
            }
            .experience {
                font-size: 1rem;
                z-index: 10;
            }
        `;

        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}

customElements.define('skill-component', SkillComponent);