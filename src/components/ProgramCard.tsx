import { ReactNode } from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  ageGroup: string;
  schedule: string;
  icon?: ReactNode;
}

const ProgramCard = ({ title, description, image, ageGroup, schedule, icon }: ProgramCardProps) => {
  return (
    <div className="program-card">
      <div 
        className="program-img" 
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="program-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="program-meta">
          <span><i className="fas fa-users"></i> {ageGroup}</span>
          <span><i className="fas fa-calendar"></i> {schedule}</span>
        </div>
      </div>
      <style jsx>{`
        .program-card {
          background-color: var(--white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          height: 100%;
        }
        
        .program-card:hover {
          transform: translateY(-10px);
        }
        
        .program-img {
          height: 200px;
          background-color: var(--medium-gray);
          background-size: cover;
          background-position: center;
        }
        
        .program-content {
          padding: 25px;
        }
        
        .program-content h3 {
          color: var(--primary-green);
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        
        .program-content p {
          color: var(--dark-gray);
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .program-meta {
          display: flex;
          justify-content: space-between;
          color: var(--dark-gray);
          font-size: 0.9rem;
          margin-top: 15px;
        }
        
        @media (max-width: 768px) {
          .program-card {
            max-width: 400px;
            margin: 0 auto;
          }
          
          .program-content {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgramCard;