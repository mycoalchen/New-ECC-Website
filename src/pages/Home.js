import '../App.css';
import '../styles/Home.css';
import peaImg from '../media/PEA.jpg'
import Navbar from '../Navbar';

function Home() {
  return (
    <div className="main-background">
      <Navbar/>
      <div className="container">
        <img className="home-bg-img" src={peaImg} alt="PEA"/>
        <div className="home-club-name">Exeter Computing Club</div>
      </div>
      <div className="home-about-bg">
        <div className="home-about-block">
          <h1>About</h1>
          <p className="welcome-text">
            Welcome to the Exeter Computing Club website! I don't really know what to say here.
          </p>
        </div>
        <div className="home-about-block">
          <h1>Coheads</h1>
          <ul className="welcome-text">
            <li>Celine Tan</li>
            <li>Michael Chen</li>
            <li>Joey Dong</li>
            <li>Nathan Khuu</li>
            <li>Anish Mudide</li>
            <li>Sophia Zhang</li>
            <li>Riya Tyagi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
