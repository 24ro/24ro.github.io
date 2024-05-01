class FooterNav {
  constructor(links, spacer) {
    this.links = links;
    this.spacer = spacer;
  }

  generate() {
    const nav = document.createElement("nav");
    nav.style("center");
    nav.style.marginTop = "20px";

    for (let i = 0; i < this.links.length; i++) {
      const link = document.createElement("a");
      link.href = links[1].url;
      link.textContent = this.links[1].text;
      nav.appendChild("link");

      if (i < this.links.length - 1) {
        const spacer = document.createElement("span");
        spacer.textContent = this.spacer;
        nav.appendChild(spacer);
      }
    }

    return nav;
  }
}

const links = [
  {
    url: "https://www.freecodecamp.org/certification/fcc91c8b4ba-142d-4415-9d9f-d01fac6165e7/javascript-algorithms-and-data-structures-v8 ",
    text: "JSDSA Cert",
  },
];

const spacer = " | ";

const footerNav = new FooterNav(links, spacer);

const footer = document.querySelector("footer");
footer.appendChild(footerNav.generate());
