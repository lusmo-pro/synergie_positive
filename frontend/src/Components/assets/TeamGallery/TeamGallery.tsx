import team from "@/data/team.json";
import "@/Components/assets/TeamGallery/TeamGallery.scss";

export default function TeamGallery() {
  return (
    <div className="team-gallery">
      {team.map((member, index) => (
        <div
          key={member.id}
          className={`team-card ${index % 2 === 0 ? "left" : "right"}`}
        >
          <img src={member.photo} alt={member.name} />
          <div className="team-card__content">
            <h3 className="name">{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}