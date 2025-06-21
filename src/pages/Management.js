import ProfileCard from '../components/ProfileCard';
import { directors } from '../assets/data/directors';
import '../styles/Management.css';

function Management() {
  return (
    <div className="management">
      <h1>Our Management Team</h1>
      <div className="profile-grid">
        {directors.map((director) => (
          <ProfileCard
            key={director.id}
            name={director.name}
            title={director.title}
            bio={director.bio}
            image={director.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Management;