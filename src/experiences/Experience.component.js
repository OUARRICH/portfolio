import React, {useState, useEffect} from 'react';

// import experiences from './data';
import Modal from './Modal';
import { getExperiences } from '../api';

import './Experience.component.css';

const renderExperienceHead = (experience, onClickExperience) => (
    <div onClick={() => onClickExperience(experience)} className="Experience__head" key={`head_${experience.id}`}>
        <div>
            <h3>{experience.role}</h3>
            {experience.client && <span className="Experience__head__at">chez </span>}
            {experience.client && <h5 className="Experience__head__client">{experience.client}</h5>}
        </div>
        <div>
            {`${experience.startDate} - ${experience.endDate}`}
        </div>
</div>);

const renderExperienceDetail = (experience, selectedExperience, show, openCloseModal) => {
    return experience.id === selectedExperience && <div className="Experience__detail" key={`detail_${experience.id}`}>
        <h4 className="Experience__detail__shortDescription">{experience.project}</h4>
        {
            experience.fullDescription && 
            <button onClick={openCloseModal} className="Experience__detail__more">
                <i className="fas fa-arrow-right"></i>
            </button>
        }
        <Modal 
            show={show} 
            onClose={openCloseModal}
            title={`${experience.role} - ${experience.client}`}
            content={experience.fullDescription} 
        />
        <ul className="Experience__detail__bullets">
            { experience.bulletPoints.map((bulletPoint, index) => <li key={`bulletPoint_${index}_${experience.id}`}>{bulletPoint}</li>) } 
        </ul>
        <div>
            <strong>Technologies: </strong>{ experience.technologies.map(item => `${item}, `)}
        </div>
</div>
}


const renderExperience = (experience, selectedExperience, onClickExperience, show, openCloseModal) => {
    return (
        <div className="Experience" key={experience.id}>
            {renderExperienceHead(experience, onClickExperience)}
            {renderExperienceDetail(experience, selectedExperience, show, openCloseModal)}
        </div>
    );
};

const Experiences = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [experiences, setExperiences] = useState([]);
    const [show, toogleModal] = useState(false);

    const openCloseModal = () => toogleModal(() => !show);

    const fetchExperiences = async () => {
        const response = await getExperiences();
        
        setExperiences(response);
    }

    useEffect(() => {
        fetchExperiences();
    }, [setExperiences]);

    const onClickExperience = (experience) => {
        setSelectedExperience(experience.id);
    };

    console.log('NODE_ENV', process.env.NODE_ENV);

    return experiences.map(experience => renderExperience(experience, selectedExperience, onClickExperience, show, openCloseModal));
}

export default Experiences;