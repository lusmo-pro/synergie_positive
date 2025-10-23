// import TeamGallery from "@/Components/assets/TeamGallery/TeamGallery";

import contact from "@/data/contact.json"

import "./Contact.scss";

export default function SectionContact() {
  return (
    <section id="Contact" className="section-contact">
      <div className="section-contact__header">
        <h2 className="section-contact__title">Nous Contacter</h2>
        <p className="section-contact__description">
          Vous avez une question, une idée ou l’envie de collaborer avec nous ?
          Cette section est faite pour vous. Nous serons ravis d’échanger,
          d’écouter vos suggestions ou de vous accompagner dans vos démarches.
          Que ce soit pour rejoindre nos projets, proposer une initiative ou
          simplement en savoir plus sur notre association, n’hésitez pas à nous
          écrire. Chaque message compte et contribue à faire grandir notre
          communauté solidaire.
        </p>
      </div>

          <div className="contact-section">
      <h2>Contactez-nous</h2>
      <p>📍 {contact.address.street}, {contact.address.postalCode} {contact.address.city}</p>
      <p>📞 {contact.phone}</p>
      <p>📧 <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
    </div>
    </section>
  );
}
