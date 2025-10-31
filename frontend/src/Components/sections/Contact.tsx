import contact from "@/data/contact.json";
import "./Section.scss";

export default function SectionContact() {
  return (
    <section id="Contact" className="section section--light">
      <div className="section__header">
        <h2 className="section__title">Nous Contacter</h2>
        <p className="section__description">
          Vous avez une question, une idée ou l’envie de collaborer avec nous ?
          Cette section est faite pour vous. Nous serons ravis d’échanger,
          d’écouter vos suggestions ou de vous accompagner dans vos démarches.
          Que ce soit pour rejoindre nos projets, proposer une initiative ou
          simplement en savoir plus sur notre association, n’hésitez pas à nous
          écrire. Chaque message compte et contribue à faire grandir notre
          communauté solidaire.
        </p>
      </div>

      <div className="section__content">
        <h3>Contactez-nous</h3>
        <p>📍 {contact.address.street}, {contact.address.postalCode} {contact.address.city}</p>
        <p>📞 {contact.phone}</p>
        <p>📧 <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      </div>
    </section>
  );
}
