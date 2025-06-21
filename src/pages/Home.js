import Hero from '../components/Hero';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <section>
        <h2>Welcome to Exemplar Construction</h2>
        <p>Building Nigeria’s future with quality and excellence.</p>
      </section>
      {/* Add more sections */}
    </div>
  );
}

export default Home;