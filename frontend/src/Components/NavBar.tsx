import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#Events" className="navbar__link">Nos Evénements</a>
        </li>
        <li className="navbar__item">
          <a href="#About" className="navbar__link">Nous Découvrir</a>
        </li>
        <li className="navbar__item">
          <a href="#Tips&Advices" className="navbar__link">Nos Astuces & Partage</a>
        </li>
        <li className="navbar__item">
          <a href="#Gallery" className="navbar__link">Notre Gallerie</a>
        </li>
        <li className="navbar__item">
          <a href="#SupportsUs" className="navbar__link">Adhérer</a>
        </li>
        <li className="navbar__item">
          <a href="#Contact" className="navbar__link">Nous Contacter</a>
        </li>
      </ul>
    </nav>
  );
}
