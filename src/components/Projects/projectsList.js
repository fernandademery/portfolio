import vocableMe from "../../assets/vocableme.png";
import mytinerary from "../../assets/mytinerary.png";
import beTheHero from "../../assets/be_the_hero.png";
import infiniteGallery from "../../assets/infinite_gallery.png";
import wackamole from "../../assets/wackamole.png";
import casaCriativa from "../../assets/casa_criativa.png";

export const projectsList = [
  {
    title: "vocable.me",
    src: vocableMe,
    stack:
      "JavaScript (React/Redux/react-router), Python, PostgresPytest, Jest",
    description:
      "In this Progressive Web Application, the users can improve their English skills by listening to curated short audios that match their interests.",
    deployed: "http://vocable.me:8000/",
    code: "https://github.com/davipaula/vocable-me",
  },
  {
    title: "Mytinerary",
    src: mytinerary,
    stack:
      "JavaScript (React/Redux/react-router-dom/Node.js/Express), HTML, CSS, MongoDB",
    description:
      "PWA that allows the users to create and share travel itineraries. The app also includes commenting and favoriting functionalities",
    deployed: "https://mytinerary-fernanda.herokuapp.com/",
    code: "https://github.com/fernandademery/MYtineraryUbiqum",
  },
  {
    title: "Be the Hero",
    src: beTheHero,
    stack: "JavaScript (React/Node.js/Express), HTML, CSS, SQL",
    description:
      "Application for connecting NGO's with potential donors and volunteers. The NGO creates a project and asks for support. The donor/volunteer connects with the NGO and provides support",
    deployed: "https://bethehero-f.herokuapp.com/",
    code: "https://github.com/fernandademery/be-the-hero",
  },
  {
    title: "Infinite Gallery",
    src: infiniteGallery,
    stack: "JavaScript (React/Redux), HTML, CSS",
    description:
      "Application for searching pictures or for scrolling through random photos. Results are queried from the specialized API provided by Unsplash.",
    deployed: "https://infinite-scroll-gallery.netlify.app/",
    code: "https://github.com/fernandademery/infinite-gallery",
  },
  {
    title: "Wackamole game",
    src: wackamole,
    stack: "JavaScript (React/Redux), HTML, CSS",
    description:
      "Fun clicking game that doesn't require sign up, You can select different levels of difficulty to play and different round durations for your game.",
    deployed: "https://whackamoolegame.netlify.app/",
    code: "https://github.com/fernandademery/whackamole-game",
  },
  {
    title: "Casa Criativa",
    src: casaCriativa,
    stack: "JavaScript, HTML, CSS",
    description:
      "JavaScript Website for sharing suggestions of activities that can be done at home during COVID-19 social distancing period.",
    code: "https://github.com/fernandademery/creative-house",
  },
];
