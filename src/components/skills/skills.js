import React, { useEffect, useRef } from 'react';
import './skills.css';

const skills = [
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'gRPC',
    logo: 'https://logo.svgcdn.com/l/grpc.png',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Azure DevOps',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azuredevops.svg',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
  },
  {
    name: 'Redis',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  {
    name: 'GraphQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    name: 'Data Structures & Algorithms',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leetcode.svg',
  },
];

export const SkillsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const skillItems = containerRef.current.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
                item.classList.add('bounce');
              }, index * 150);
            });
            observer.disconnect(); // stop observing after animation triggered
          }
        });
      },
      {
        threshold: 0.3, // 30% visible triggers animation
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={containerRef}>
      <h2 className="skills-title sticky-title">Technical Skills</h2>
      <div className="skills-scroll-area">
        <div className="skills-container">
          {skills.map(skill => (
            <div key={skill.name} className="skill-item" title={skill.name}>
              <img
                src={skill.logo}
                alt={skill.name}
                className="skill-image"
                loading="lazy"
              />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
