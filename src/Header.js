import React from 'react'
import Folders from './Folders'
import AppDisplay from './AppDisplay'
import me from './images/me.jpeg'
import OpenFolder from './OpenFolder'
import snkrs from './images/snkrs.png'
import SkillBar from 'react-skillbars';
import bbal from './images/bbal.png';
import mac from './images/mac.png';
import climbing from './images/climbing.png';


const Header = () => {
    const colors = ['#797EF6', '#4ADEDE', '#1AA7EC', '#1E2F97', '#0044FF', '#001374']
    const skills = [

        {
            type: "ReactJS",
            level: 90,
            color: {
                bar: colors[0],
                title: {
                    background: 'gray',
                    text: colors[0]
                }


            }
        },
        {
            type: "Python",
            level: 87,
            color: {
                bar: colors[1],
                title: {
                    background: 'gray',
                    text: colors[1]
                }

            }
        },
        {
            type: "Java",
            level: 80,
            color: {
                bar: colors[2],
                title: {
                    background: 'gray',
                    text: colors[2]
                }

            }
        },
        {
            type: "Django",
            level: 75,
            color: {
                bar: colors[4],
                title: {
                    background: 'gray',
                    text: colors[4]
                }

            }
        },
        {
            type: "Spark",
            level: 75,
            color: {
                bar: colors[3],
                title: {
                    background: 'gray',
                    text: colors[3]
                }

            }
        },
        {
            type: "SQL",
            level: 70,
            color: {
                bar: colors[5],
                title: {
                    background: 'gray',
                    text: colors[5]
                }

            }
        },
    ];



    const aboutMeBody = <div>
        <div className='infoRow'>
            <p>
                My name is Uwais Ishaq, I am currently a <p className='specialText'>Computer Science student </p>at Queen Mary University of London.
                I am an ambitious and dynamic student who can adapt to any work environment given.
                I have proven an aptitude in <p className='specialText'>mathematics, logical thinking and problem solving</p> and have a passion for technology, learning new skills and expanding my knowledge in my free time.
                aiming to improve my skills and further enhance my experience.
                I love a challenge and solving problems, always looking for a more efficient way to complete processes.

            </p>
            <img id='me' src={me} />
        </div>
        <p>

        </p>
    </div>

    const experienceBody =
        <div>
            <div className='expSec'>
                <h3>
                    Data Science Intern at Infosys
                </h3>
                <h4>June 2022 – Present</h4>
                <p>
                    •	As part of the Data and Analytics team, I am working on an Extract, Transform and Load (ETL) solution in Spark to help generate meaningful, useable data for clients. Aiming to process and transform data from different sources in multiple data formats in Spark Cluster, implementing the solution using Python and PySpark.
                </p>
            </div>
            <div className='expSec'>
                <h3>
                    Coding With Codex Tutor
                </h3>
                <h4>June 2022 – Present</h4>
                <p>
                    •	Teaching individuals python programming while adapting my teaching style to maximise engagement and understanding.
                </p>
            </div>
            <div className='expSec'>
                <h3>
                    Teaching Assistant at QMUL
                </h3>
                <h4>September 2021 – April 2022</h4>
                <p>
                    •	Teaching first year university students key programming and computing concepts and first year modules:
                    <br />Procedural Programming, Computer Systems and Networks, Web Technology and OOP
                </ p >
            </div>

            <div className='expSec'>
                <h3>
                    Intern at EDI Microsoft I Accelerator
                </h3>
                <h4>July 2021</h4>
                <p>
                    •	In July, working on the EDI Microsoft I Accelerator, a team and I developed a business idea and plan for Uber to supply customers with an environmentally sustainable service. Undertaking market research and analyzing the busi-ness model we presented an idea that will help Uber reduce carbon emissions while helping increase the company’s profit.
                </p>
            </div>
        </div>


    const skillBody =
        <div className='skills'>
            <p>
                I am well versed in the following languages / frameworks:
            </p>
            <SkillBar skills={skills} />

        </div>



    const interestsBody =
        <div className='interestsBody'>

            <div className='interestsRow'>
                <div className='folderCont'>
                    <img className='fImg' src={climbing} />
                    <p>Climbing</p>
                </div>

                <div className='folderCont'>
                    <img className='fImg' src={mac} />
                    <p>Tech</p>
                </div>
            </div>

            <div className='interestsRow'>
                <div className='folderCont'>
                    <img className='fImg' src={snkrs} />
                    <p>Sneakers</p>
                </div>
                <div className='folderCont'>
                    <img className='fImg' src={bbal} />
                    <p>Basketball</p>
                </div>
            </div>

        </div>
    return (


        <div className='header'>
            <div className='test'>
                <div className='introText'>
                    <h1>Hey there 👋<br />
                        My name is Uwais Ishaq<br />
                        Welcome to my Portfolio</h1>
                </div>
                <div className='introText2'>
                    <h1>To find out more about me<br /> navigate through the apps </h1>
                </div>
                <div className='introTextNew'>
                    <h1>Uwais Ishaq<br />Student<br />Tech Enthusiast</h1>
                </div>
                <AppDisplay appId="aboutMe" title="Hey there 👋" body={aboutMeBody} />
                <AppDisplay appId="skills" title="My Skills" body={skillBody} />
                <AppDisplay appId="experience" title="Experience" body={experienceBody} />
                <OpenFolder appId="interestsFolder" title="Interests" body={interestsBody} />
            </div>
            <div className='test2'>
                <Folders />
            </div>
        </div>



    )
}

export default Header