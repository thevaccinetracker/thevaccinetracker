import React from 'react'
import '../assets/styles/style.scss'
import rohit from '../assets/images/rohit.png'
import akash from '../assets/images/akash.png'
import ujjwal from '../assets/images/ujjwal.png'
import suyash from '../assets/images/suyash.png'
import shailesh from '../assets/images/shailesh.png'
import priyal from '../assets/images/priyal.png'
import rahil from '../assets/images/rahil.png'
import vipin from '../assets/images/vipin.png'
import shreyashSharma from '../assets/images/shreyash-sharma.png'
import mayank from '../assets/images/mayank.png'
import faisal from '../assets/images/faisal.png'
import mohit from '../assets/images/mohit.png'
import rishu from '../assets/images/rishu.png'
import shravan from '../assets/images/shravan.png'
import abhishek from '../assets/images/abhishek.png'
import shreyashBarot from '../assets/images/shreyash-barot.png'
import contributerLink from '../assets/images/contributer-link.svg'
import contributerEmail from '../assets/images/contributer-email.svg'
import contributerFacebook from '../assets/images/contributer-facebook.svg'
import contributertwitter from '../assets/images/contributer-twitter.svg'
import contributerLinkedin from '../assets/images/contributer-linkedin.svg'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SEO from '../components/seo'

const contributers = () => {
  const contributersData = [
    {
      name: 'Rohit Bind',
      profilePic: rohit,
      designation: 'Framer / Founder',
      linkedin: 'https://www.linkedin.com/in/rohitbind/',
      twitter: 'https://twitter.com/rohitbind07',
      facebook: 'https://www.facebook.com/bindrohit/',
      email: 'rohit.bind@gmail.com',
      portfolioLink: 'https://rohitbind.com'
    },
    {
      name: 'Akash Deep',
      profilePic: akash,
      designation: 'Product Head',
      linkedin: '#',
      twitter: '#',
      facebook: '#',
      email: 'i13akashd@iimidr.ac.in',
      portfolioLink: '#'
    },
    {
      name: 'Ujjwal Singhal',
      profilePic: ujjwal,
      designation: 'Full Stack Engineer',
      linkedin: 'https://www.linkedin.com/in/ujjwalsinghal',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Suyash Deshpande',
      profilePic: suyash,
      designation: 'Full Stack Engineer',
      linkedin: 'https://www.linkedin.com/in/suyashdeshpande/',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Shailesh V',
      profilePic: shailesh,
      designation: 'Backend Engineer',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Priyal Mittal',
      profilePic: priyal,
      designation: 'Data Researcher',
      linkedin: 'https://www.linkedin.com/in/priyalmittal/',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Rahil Raza Saifi',
      profilePic: rahil,
      designation: 'Data Researcher',
      linkedin: 'https://www.linkedin.com/in/rahil-raza-5285b1109',
      twitter: '',
      facebook: '',
      email: 'rahilraza3@gmail.com',
      portfolioLink: ''
    },
    {
      name: 'Vipin TV',
      profilePic: vipin,
      designation: 'Data Researcher / UX Deigner',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Shreyash Sharma',
      profilePic: shreyashSharma,
      designation: 'UX Designer',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Mayank Patel',
      profilePic: mayank,
      designation: 'UX Designer',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Faisal Alam',
      profilePic: faisal,
      designation: 'Backend & Dev Ops Engineer',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Mohit Gupta',
      profilePic: mohit,
      designation: 'Full Stack Engineer',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Rishu Kumar',
      profilePic: rishu,
      designation: 'Front End Enigineer',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Shravan Kumar',
      profilePic: shravan,
      designation: 'Product Mentor',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Abhishek Gowda',
      profilePic: abhishek,
      designation: 'Organic Expert',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Shreyash Barot',
      profilePic: shreyashBarot,
      designation: 'UX Designer / Brand Identity',
      linkedin: '',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    }
  ]

  const listOfContributer = contributersData.map(contributer => (
    <div className="col-md-3 col-xs-6">
      <div className="contributerCard">
        <img
          src={contributer.profilePic}
          className="img-responsive"
          alt={'Contributer'}
        />
        <h3 className="name">{contributer.name}</h3>
        <h5 className="designation">{contributer.designation}</h5>
        <ul className="contributer-portfolio">
          <li>
            <a href={`${contributer.linkedin}`} target="_blank">
              <img
                src={contributerLinkedin}
                className="img-responsive"
                alt={'Linkedin'}
              />
            </a>
          </li>
          <li>
            <a href={`${contributer.twitter}`} target="_blank">
              <img
                src={contributertwitter}
                className="img-responsive"
                alt={'twitter'}
              />
            </a>
          </li>
          <li>
            <a href={`${contributer.facebook}`} target="_blank">
              <img
                src={contributerFacebook}
                className="img-responsive"
                alt={'facebook'}
              />
            </a>
          </li>
          <li>
            <a href={`mailto:${contributer.email}`} target="_blank">
              <img
                src={contributerEmail}
                className="img-responsive"
                alt={'email'}
              />
            </a>
          </li>
          <li>
            <a href={`${contributer.portfolioLink}`} target="_blank">
              <img
                src={contributerLink}
                className="img-responsive"
                alt={'portfolio'}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  ))

  return (
    <div className="ourSuperheros">
      <SEO
        title="All the COVID-19 vaccine developers or researchers"
        description="See all the list of vaccine developers working on the development of the COVID-19 vaccine and their current latest status"
      />
      <MainHeader />
      <div className="firstFold">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mainHeading">Our Superheros</h1>
              <h4 className="subHeading">The team who built this</h4>
            </div>
          </div>
          <div className="row superHeroes">{listOfContributer}</div>
        </div>
      </div>
      <MainFooter />
    </div>
  )
}
export default React.memo(contributers)
