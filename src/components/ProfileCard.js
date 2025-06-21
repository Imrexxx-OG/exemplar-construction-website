import '../styles/ProfileCard.css';

function ProfileCard({ name, title, bio, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="title">{title}</p>
      <p className="bio">{bio}</p>
    </div>
  );
}

export default ProfileCard;