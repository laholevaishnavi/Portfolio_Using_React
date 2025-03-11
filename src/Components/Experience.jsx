import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
  if (!(resumeExperience && resumeBasicInfo)) {
    return null;
  }

  const sectionName = resumeBasicInfo.section_name.experience;

  const work = resumeExperience.map((workExperience, i) => {

    const mainTech = workExperience.mainTech.map((technology, index) => (
      <span
        key={index}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {technology}
      </span>
    ));


    
    const tech = workExperience.technologies.map((technology, index) => (
      <span
        key={index}
        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
      >
        {technology}
      </span>
    ));

    

    return (
      <VerticalTimelineElement
        key={i}
        className="vertical-timeline-element--work"
        date={workExperience.years}
        iconStyle={{
          background: '#AE944F',
          color: '#fff',
          textAlign: 'center',
        }}
        icon={<i className="fab fa-react experience-icon"></i>}
      >
        <div className="text-left mb-1">
          {mainTech}
        </div>
        <h3 className="vertical-timeline-element-title font-semibold text-left">
          {workExperience.title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-left">
          {workExperience.company}
        </h4>
        <div className="text-left mt-3">
          {tech}
        </div>
      </VerticalTimelineElement>
    );
  });

  return (
<section id="experience" className="pb-5 bg-[#efe1bd]">

      <div className="container mx-auto px-4">
        <div className="w-full">
          <h1 className="text-3xl  pt-16  pb-16 md:text-4xl font-bold text-center text-black mb-4">
            <span className="text-black">{sectionName}</span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: '#AE944F',
              color: '#fff',
              textAlign: 'center',
            }}
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
