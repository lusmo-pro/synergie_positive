import { getSheetData, Event } from "@/app/lib/googleSheets";

interface EventsCardsProps {
  events: Event[];
}

export default function EventsCards({ events }: EventsCardsProps) {
  return (
    <div className="events-gallery">
      {events.map((event) => (
        <div key={event.id} className="events-gallery__card">
          <img className="events-gallery__image" src={event.cover} alt={event.title} />
          <div className="events-gallery__content">
            <div className="events-gallery__header">
              <h2 className="events-gallery__title">{event.title}</h2>
              <p className="events-gallery__genre">{event.genre}</p>
            </div>
            <div className="events-gallery__details">
              <div className="events-gallery__detail">
                <img src="/icons/date.svg" alt="Date" className="events-gallery__icon" />
                <p className="events-gallery__text">
                  {new Date(event.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="events-gallery__detail">
                <img src="/icons/hour.svg" alt="Heure" className="events-gallery__icon" />
                <p className="events-gallery__text">{event.time}</p>
              </div>
              <div className="events-gallery__detail">
                <img src="/icons/location.svg" alt="Adresse" className="events-gallery__icon" />
                <p className="events-gallery__text">{event.location.city}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Récupérer les données côté serveur avec SSG ou ISR
export async function getStaticProps() {
  const events = await getSheetData();
  return { props: { events }, revalidate: 60 }; // mise à jour toutes les 60s
}
