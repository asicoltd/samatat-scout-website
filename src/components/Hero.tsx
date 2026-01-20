const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Building Tomorrow's Leaders Today</h1>
        <p>
          Samatat Open Scout Group has been fostering youth development, leadership skills, 
          and community service in Bangladesh for over three decades. Join our scouting family 
          and embark on a journey of growth, adventure, and service.
        </p>
        <div className="cta-buttons">
          <a href="#join" className="btn btn-primary">Join Our Scout Group</a>
          <a href="#programs" className="btn btn-secondary">Explore Our Programs</a>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background: linear-gradient(rgba(27, 94, 32, 0.8), rgba(27, 94, 32, 0.9)), 
                      url('https://images.unsplash.com/photo-1544445467-2dc6b0b4f33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          color: var(--white);
          padding: 100px 0;
          text-align: center;
        }
        
        .hero h1 {
          font-size: 3rem;
          color: var(--white);
          margin-bottom: 20px;
        }
        
        .hero p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        @media (max-width: 992px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero p {
            font-size: 1.1rem;
            padding: 0 20px;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0;
          }
          
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero p {
            font-size: 1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            padding: 0 20px;
          }
          
          .cta-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
        
        @media (max-width: 576px) {
          .hero {
            padding: 60px 0;
          }
          
          .hero h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;