import "./index.css";
const listItems = [
  {
    clase: "",
    name: "Inicio",
    link: "#",
  },
  {
    clase: "",
    name: "Trayectos Especiales",
    link: "/journey/special",
  },
];

const createItem = ({ name, link, clase }, i) => (
  <li
    key={`${clase}--${i}`}
    className={`${clase} ${clase}--${i}`}
    role="menuitem"
  >
    <a href={link} aria-label={name}>
      {name}
    </a>
  </li>
);

export const SideBar = () => (
  <nav className="side-bar" role="navigation">
    <ul>{listItems.map((item, i) => createItem(item, i))}</ul>
  </nav>
);
