import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const handleOneclick1 = () => {
  toast.warning("Opening the project", {
    theme: "dark",
  });

  setTimeout(() => {
    window.location.href = "https://browncoffee.netlify.app/";
  }, 2000);
};

const handleOneclick2 = () => {
  toast.warning("Opening the project", {
    theme: "dark",
  });

  setTimeout(() => {
    window.location.href = "https://scintillating-beijinho-3f8644.netlify.app";
  }, 2000);
};

const handleOneclick3 = () => {
  toast.warning("Opening the project", {
    theme: "dark",
  });

  setTimeout(() => {
    window.location.href = "https://netfix-ui.netlify.app";
  }, 2000);
};

const handleOneclick4 = () => {
  toast.error("Site is under construction sorry", {
    theme: "dark",
  });
};

const handleOneclick5 = () => {
  toast.error("Site is under construction sorry", {
    theme: "dark",
  });
};

const handleOneclick6 = () => {
  toast.error("Site is under construction sorry", {
    theme: "dark",
  });
};

const projectData = [
  {
    id: 1,
    src: "assets/coffeeDesign.png",
    h1: "Coffee shop landing page",
    img1: "assets/html.png",
    img2: "assets/css.png",
    img3: "assets/javascript.png",
    img4: "assets/bootstrap.png",
    click: handleOneclick1,
  },
  {
    id: 2,
    src: "assets/weather.png",
    h1: "Weather Forecast",
    img1: "assets/react.png",
    img2: "assets/tailwind-skill.png",
    click: handleOneclick2,
  },
  {
    id: 3,
    src: "assets/netflix.png",
    h1: "Netflix landing page UI",
    img1: "assets/html.png",
    img2: "assets/css.png",
    img3: "assets/javascript.png",
    click: handleOneclick3,
  },
  {
    id: 4,
    src: "assets/gaming.png",
    h1: "Gaming Hardware page",
    img1: "assets/html.png",
    img2: "assets/css.png",
    img3: "assets/javascript.png",
    img4: "assets/bootstrap.png",
    click: handleOneclick4,
  },
  {
    id: 5,
    src: "assets/spotify.png",
    h1: "Spotify clone",
    img1: "assets/react.png",
    click: handleOneclick5,
  },
  {
    id: 6,
    src: "assets/spence.png",
    h1: "Spence Starter UI",
    img1: "assets/html.png",
    img2: "assets/css.png",
    img3: "assets/javascript.png",
    img4: "assets/bootstrap.png",
    click: handleOneclick6,
  },
];

export default projectData;
