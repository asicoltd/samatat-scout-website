import Hero from '@/components/Hero';
import ProgramCard from '@/components/ProgramCard';
import EventCard from '@/components/EventCard';
import Testimonial from '@/components/Testimonial';
import Gallery from '@/components/Gallery';

export default function Home() {
  const programs = [
    {
      title: 'Cub Scouts',
      description: 'For children aged 6-10 years. Focus on basic scouting skills, teamwork, and character building through fun activities and games.',
      image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ageGroup: 'Ages 6-10',
      schedule: 'Weekly Meetings'
    },
    {
      title: 'Scouts',
      description: 'For youth aged 11-17. Development of leadership, outdoor survival skills, first aid, and community service projects.',
      image: 'https://images.unsplash.com/photo-1584696049838-8e692282a2e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ageGroup: 'Ages 11-17',
      schedule: 'Weekly + Camps'
    },
    {
      title: 'Rover Scouts',
      description: 'For young adults aged 18-30. Advanced leadership training, community development projects, and mentorship roles.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ageGroup: 'Ages 18-30',
      schedule: 'Bi-weekly + Projects'
    },
    {
      title: 'Community Service',
      description: 'Engaging in meaningful projects that benefit local communities, developing empathy and social responsibility.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ageGroup: 'All Ages',
      schedule: 'Monthly Projects'
    }
  ];

  const events = [
    {
      date: { day: '15', month: 'June' },
      title: 'Summer Adventure Camp',
      description: 'A 5-day camping experience focused on outdoor survival skills, teamwork, and leadership development for Scouts and Rover Scouts.',
      link: '#'
    },
    {
      date: { day: '22', month: 'June' },
      title: 'Community Clean-Up Drive',
      description: 'Join us as we clean up local parks and public spaces. Open to all members and volunteers from the community.',
      link: '#'
    },
    {
      date: { day: '05', month: 'July' },
      title: 'First Aid Training Workshop',
      description: 'Essential first aid and emergency response training for all scout members. Certification provided upon completion.',
      link: '#'
    }
  ];

  const testimonials = [
    {
      text: "Joining Samatat Open Scout Group was the best decision I've made. I've learned leadership skills that helped me in school and made lifelong friends. The camping experiences are unforgettable!",
      author: "Arif Rahman",
      role: "Scout Leader, Member for 8 years"
    },
    {
      text: "As a parent, I appreciate the values Samatat instills in my children. They've become more responsible, confident, and community-minded. The leaders are dedicated and excellent role models.",
      author: "Fatima Begum",
      role: "Parent of Cub Scout"
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1584696049838-8e692282a2e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1544445467-2dc6b0b4f33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <>
      <Hero />
      
      {/* Programs Section */}
      <section className="section" id="programs">
        <div className="container">
          <div className="section-title">
            <h2>Our Scouting Programs</h2>
          </div>
          
          <div className="programs-grid">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
          <style jsx>{`
            .programs-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 30px;
            }
            
            @media (max-width: 768px) {
              .programs-grid {
                grid-template-columns: 1fr;
                max-width: 400px;
                margin: 0 auto;
              }
            }
          `}</style>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="section events-section" id="events">
        <div className="container">
          <div className="section-title">
            <h2>Upcoming Events</h2>
          </div>
          
          <div className="events-grid">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          <style jsx>{`
            .events-section {
              background-color: var(--light-gray);
            }
            
            .events-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 30px;
            }
            
            @media (max-width: 768px) {
              .events-grid {
                grid-template-columns: 1fr;
                max-width: 400px;
                margin: 0 auto;
              }
            }
          `}</style>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section" id="gallery">
        <div className="container">
          <div className="section-title">
            <h2>Scouting in Action</h2>
          </div>
          <Gallery images={galleryImages} />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Scouts Say</h2>
          </div>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
          <style jsx>{`
            .testimonials-section {
              background-color: var(--light-gray);
            }
            
            .testimonials-container {
              max-width: 800px;
              margin: 0 auto;
            }
          `}</style>
        </div>
      </section>
      
      {/* Join Section */}
      <section className="section" id="join" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Join Our Scouting Family</h2>
          </div>
          
          <div className="join-card">
            <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Become a Member Today</h3>
            <p style={{ marginBottom: '30px', textAlign: 'center' }}>
              Whether you're a youth looking to join, a parent interested in enrolling your child, 
              or an adult wanting to volunteer, we welcome you to our scouting community.
            </p>
            
            <div className="join-options">
              <div className="join-option">
                <div className="join-icon">👦</div>
                <h4>Youth Members</h4>
                <p>Ages 6-17. Join age-appropriate programs that foster growth and development.</p>
              </div>
              
              <div className="join-option">
                <div className="join-icon">👨‍👩‍👧‍👦</div>
                <h4>Rover Scouts</h4>
                <p>Ages 18-30. Advanced leadership and community development opportunities.</p>
              </div>
              
              <div className="join-option">
                <div className="join-icon">🤝</div>
                <h4>Volunteers & Leaders</h4>
                <p>Adults interested in mentoring and supporting youth development.</p>
              </div>
            </div>
            
            <div className="join-cta">
              <a href="#contact" className="btn btn-primary">Register Interest Now</a>
              <p style={{ marginTop: '15px', color: 'var(--dark-gray)' }}>Or contact us directly for more information</p>
            </div>
          </div>
          <style jsx>{`
            .join-card {
              max-width: 800px;
              margin: 0 auto;
              background-color: var(--white);
              padding: 40px;
              border-radius: 8px;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            }
            
            .join-options {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 30px;
              margin-bottom: 30px;
            }
            
            .join-option {
              text-align: center;
              padding: 20px;
              border: 1px solid var(--medium-gray);
              border-radius: 8px;
              transition: transform 0.3s ease;
            }
            
            .join-option:hover {
              transform: translateY(-5px);
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .join-icon {
              font-size: 2.5rem;
              margin-bottom: 15px;
            }
            
            .join-option h4 {
              margin-bottom: 10px;
            }
            
            .join-option p {
              color: var(--dark-gray);
              line-height: 1.6;
            }
            
            .join-cta {
              text-align: center;
            }
            
            .join-cta .btn {
              font-size: 1.1rem;
              padding: 15px 40px;
            }
            
            @media (max-width: 768px) {
              .join-card {
                padding: 30px 20px;
              }
              
              .join-options {
                grid-template-columns: 1fr;
                max-width: 300px;
                margin: 0 auto 30px;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}