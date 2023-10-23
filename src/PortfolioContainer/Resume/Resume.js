import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Resume.css';


const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        );
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "HTML", ratingPercentage: 90 },
        { skill: "BootStrap/TailWind CSS", ratingPercentage: 90 },
        { skill: "React JS", ratingPercentage: 85 },
        { skill: "NextJs", ratingPercentage: 80 },
        { skill: "TypeScript", ratingPercentage: 80 },
        { skill: "Node.JS", ratingPercentage: 75 },
        { skill: "MySQL", ratingPercentage: 75 },
        { skill: "MongoDB", ratingPercentage: 85 },
        { skill: "Jest", ratingPercentage: 90 },
        { skill: "Git/GitHub", ratingPercentage: 90 },
    ];


    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2021", toDate: "2022" },
            description:
                "A Personal portfolio website to showcase all my details and projects in one place.",
            subHeading: "Tech Stack Used: React JS, Bootstrap",
        },
        {
            title: "Responsive E-Commerce Web App",
            duration: { fromDate: "2022", toDate: "2022" },
            description:
                "An E-commerce web application for practice in skill development. It's accessible on my github page.",
            subHeading: "Tech Stack Used: HTML,CSS,JavaScript,Bootstrap",
        },
    ];


    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
                heading={"National Open University of Nigeria (NOUN)"}
                subHeading={"BACHELOR OF SCIENCE COMPUTER SCIENCE"}
                fromDate={"2022"}
                toDate={"PRESENT"}
            />
        </div>,

        // Work experience
        <div className='resume-screen-container' key="work-experience">
            <div className='experience-container'>
                <ResumeHeading
                    heading={"Freelancing"}
                    subHeading={"Frontend Developer"}
                    fromDate={"Sept 2023"}
                    toDate={"Present"}
                />

                <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Developed an e-commerce webiste for client with the dashboard
                        for managing the products, managing reviews, users,payment etc.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Integrated the web app with backend services to create
                        new user onboarding application with dynamic form content.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - I stretch my mental capacity to develop UI as per the given designs.
                    </span>
                    <br />
                </div>
            </div>
        </div>,

        // Programming Skills

        <div className='resume-screen-container programming-skills-container'
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className='active-percentage-bar'>
                        </div>
                    </div>
                </div>
            ))}
        </div>,

        <div className='resume-screen-container' key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,


        <div className='resume-screen-container' key="interests">
            <ResumeHeading
                heading='Teaching'

                description='Apart from being a tech enthusiast and a code writer, I also love to teach others what I know simply because I believe by teaching others we also learn.'
            />
            <ResumeHeading
                heading='Music'
                description="Listening to soothing music is something I can never compromise with, 
                skimming through Spotify's pop/Hip-hop songs charts is at times the stress reliever that I can get my hands on."
            />
            <ResumeHeading
                heading='Gaming'
                description="I like to challenge my reflexes a lot while competing in football games, pushing the ranks and 
                having interactive gaming sessions excites me the most."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt='B'
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>

        ));
    };


    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            // UNSUBSCRIBE THE SUBSCRIPTIONS
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);


    return (
        <div className='resume-container screen-container fadeIn'
            id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={"My Formal Bio Details"} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
