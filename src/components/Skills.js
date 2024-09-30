import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';

const SkillIcon = ({ Icon, tooltipText, color }) => (
    <OverlayTrigger
        placement="top"
        overlay={<Tooltip id={`${tooltipText}-tooltip`}>{tooltipText}</Tooltip>}
    >
        <span style={{ cursor: 'pointer', margin: '0 10px' }}>
            <Icon size={60} style={{ color }} />
        </span>
    </OverlayTrigger>
);


function Skills() {
    return (
        <section id="skills" className="text-center m-5">
            <h2 className='my-5' style={{ fontSize: "40px", fontWeight: "700" }}>My Skills</h2>
            <p className='text-center mx-2'>In this section, you'll see the tools and technologies I've mastered to create engaging, <br /> efficient digital experiences. I focus on writing clean, maintainable code while staying up-to-date with the latest trends in front-end development.</p>
            <div className="skill-icons">
                <SkillIcon Icon={FaHtml5} tooltipText="HTML" color="#E44D26" />
                <SkillIcon Icon={FaCss3Alt} tooltipText="CSS" color="#1572B6" />
                <SkillIcon Icon={FaJsSquare} tooltipText="JavaScript" color="#F0DB4F" />
                <SkillIcon Icon={FaReact} tooltipText="React" color="#61DAFB" />
                <SkillIcon Icon={FaBootstrap} tooltipText="Bootstrap" color="#7952B3" />
            </div>
        </section>
    )
}

export default Skills