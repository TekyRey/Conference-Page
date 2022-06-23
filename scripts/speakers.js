const speakerSection = document.querySelector('.subsection');

const speakersProgram = [
  {
    image: "../assets/images/speaker4.jpg",
    icon: "../assets/images/pattern.jpg",
    name: "Rehema Mwaka",
    label: "Founder and CEO of WIT",
    description:
      "Rehema is the founder and CEO of the women in tech conference. She is also a Passionate software developer who wants to make the world a better place",
  },
  {
    image: "../assets/images/speaker3.jpg",
    icon: "../assets/images/pattern.jpg",
    name: "Calveline Waching",
    label: "CEO of Amazing Cal",
    description:
      "Calveline is the founder and CEO of the Amazing Cal company. She is also a Passionate software developer who wants to make the world a better place",
  },
  {
    image: "../assets/images/speaker4.jpg",
    icon: "../assets/images/pattern.jpg",
    name: "Hellen Wainaina",
    label: "Product Manager",
    description:
      "Hellen is a passionate product manager, currently making great things happen at Google",
  },
  {
    image: "../assets/images/speaker3.jpg",
    icon: "../assets/images/pattern.jpg",
    name: "Rose Tinashe",
    label: "Quality Assuarace",
    description: "Rose is a professional Quality Assurance engineer at Helleka",
  },
  {
    image: "../assets/images/speaker4.jpg",
    icon: "../assets/images/pattern.jpg",
    name: "Martha Obwaka",
    label: "Software Marketer",
    description:
      "Martha is a top tier software marketer who has managed to market and successfully sell over 100 products",
  },
  {
    image: "../assets/images/speaker3.jpg",
    icon: "../assets/images/pattern.jpg",
    name: "Rehema Mwaka",
    label: "Founder and CEO of Women in Tech",
    description:
      "Rehema is the founder and CEO of the women in tech conference. She is also a Passionate software developer who wants to make the world a better place",
  },
];

for (let i = 0; i < speakersProgram.length; i += 1) {
  const fetchSpeakers = speakerSection.innerHTML;
  speakerSection.innerHTML = `<div class="subsection-items">
          <div class="subsection-img">
            <img
              src="${speakersProgram[i].image}"
              alt="A guy in a suit"
              class="speaker-img"
            />
            <img
              src="${speakersProgram[i].icon}"
              alt="A pattern of rectangles"
              class="main-logo"
            />
          </div>
          <div class="speaker-description">
            <h3>${speakersProgram[i].name}</h3>
            <span class="subsection-label"
              >${speakersProgram[i].label}</span
            >
            <p>
              ${speakersProgram[i].description}
            </p>
          </div>
        </div>${fetchSpeakers}`;
}
