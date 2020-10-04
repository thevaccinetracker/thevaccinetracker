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
      linkedin: 'https://www.linkedin.com/in/deep-akash/',
      twitter: '',
      facebook: '',
      email: 'i13akashd@iimidr.ac.in',
      portfolioLink: ''
    },
    {
      name: 'Ujjwal Singhal',
      profilePic: ujjwal,
      designation: 'Full Stack Engineer',
      linkedin: 'https://www.linkedin.com/in/ujjwalsinghal',
      twitter: 'https://twitter.com/ujjwal8880',
      facebook: 'https://www.facebook.com/ujjwal.singhal.19/',
      email: 'ujjwalsinghal19@gmail.com',
      portfolioLink: 'https://www.cakeresume.com/ujjwal-singhal'
    },
    {
      name: 'Suyash Deshpande',
      profilePic: suyash,
      designation: 'Full Stack Engineer',
      linkedin: 'https://www.linkedin.com/in/suyashdeshpande/',
      twitter: '',
      facebook: '',
      email: 'suyashdeshpande1998@gmail.com',
      portfolioLink: ''
    },
    {
      name: 'Shailesh V',
      profilePic: shailesh,
      designation: 'Backend Engineer',
      linkedin: 'https://www.linkedin.com/in/shailesh-vishvakrama-66292282/',
      twitter: '',
      facebook: '',
      email: 'shaileshrv.1432@gmail.com',
      portfolioLink: ''
    },
    {
      name: 'Priyal Mittal',
      profilePic: priyal,
      designation: 'Data Researcher',
      linkedin: 'https://www.linkedin.com/in/priyalmittal/',
      twitter: '',
      facebook: '',
      email: 'priyal96@outlook.com',
      portfolioLink: 'https://www.behance.net/priyalmittal'
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
      linkedin: 'https://www.linkedin.com/in/vipin-viswan-36a398147',
      twitter: '',
      facebook: '',
      email: 'vipinviswantv@gmail.com',
      portfolioLink: ''
    },
    {
      name: 'Shreyash Sharma',
      profilePic: shreyashSharma,
      designation: 'UX Designer',
      linkedin: 'https://www.linkedin.com/in/shreyash-sharma-3a5bb371/',
      twitter: 'https://twitter.com/shreyashsharma2?s=09',
      facebook: 'https://www.facebook.com/mitxiyswang',
      email: 'mitxiyswang@gmail.com',
      portfolioLink: 'https://www.behance.net/shreyash_sharma'
    },
    {
      name: 'Mayank Patel',
      profilePic: mayank,
      designation: 'UX Designer',
      linkedin: 'https://www.linkedin.com/in/mayank-patel-a00575ab/',
      twitter: 'https://twitter.com/mayankap93',
      facebook: 'https://www.facebook.com/mayankap93',
      email: 'mayankap93@gmail.com',
      portfolioLink: 'https://www.behance.net/mayankapatel'
    },
    {
      name: 'Faisal Alam',
      profilePic: faisal,
      designation: 'Backend & Dev Ops Engineer',
      linkedin: 'https://www.linkedin.com/in/ifaisalalam/',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Mohit Gupta',
      profilePic: mohit,
      designation: 'Full Stack Engineer',
      linkedin: 'https://www.linkedin.com/in/mohit-gupta-developer',
      twitter: '',
      facebook: '',
      email: 'mohitgupta3mail@gmail.com',
      portfolioLink: 'https://www.github.com/thedeveloperr'
    },
    {
      name: 'Rishu Kumar',
      profilePic: rishu,
      designation: 'Front End Enigineer',
      linkedin: 'https://www.linkedin.com/in/rishu-kumar-9a39ab148',
      twitter: '',
      facebook: '',
      email: 'rishukr06@gmail.com',
      portfolioLink: 'https://rishu.engineer'
    },
    {
      name: 'Shravan Kumar',
      profilePic: shravan,
      designation: 'Product Mentor',
      linkedin: 'https://www.linkedin.com/in/shra1cumar/',
      twitter: '',
      facebook: '',
      email: '',
      portfolioLink: ''
    },
    {
      name: 'Abhishek Gowda',
      profilePic: abhishek,
      designation: 'Organic Expert',
      linkedin: 'https://www.linkedin.com/in/abhishek-c-gowda/',
      twitter: 'https://twitter.com/abhishekgowda05',
      facebook: 'https://www.facebook.com/abhishekcgowda05',
      email: 'abhishekcgowda21@gmail.com',
      portfolioLink: ''
    },
    {
      name: 'Shreyash Barot',
      profilePic: shreyashBarot,
      designation: 'UX Designer / Brand Identity',
      linkedin: 'https://www.linkedin.com/in/shreyashbarot/',
      twitter: 'https://twitter.com/shreyash_barot',
      facebook: 'https://www.facebook.com/sbarot2611/',
      email: 'sbarot2611@gmail.com',
      portfolioLink: 'https://dribbble.com/shreyash_barot'
    }
  ]

  const IconWithUrl = props => {
    const { contributer, imageSrc, media } = props
    const link = media === 'email' ? `mailto:${contributer}` : contributer
    return contributer ? (
      <li>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={imageSrc} className="img-responsive" alt={imageSrc} />
        </a>
      </li>
    ) : (
      ''
    )
  }

  const listOfContributer = contributersData.map((contributer, index) => (
    <div className="col-md-3 col-xs-6" key={index}>
      <div className="contributerCard">
        <img
          src={contributer.profilePic}
          className="img-responsive"
          alt={'Contributer'}
        />
        <h3 className="name">{contributer.name}</h3>
        <h5 className="designation" title={contributer.designation}>
          {contributer.designation}
        </h5>
        <ul className="contributer-portfolio">
          {
            <IconWithUrl
              contributer={contributer.linkedin}
              imageSrc={contributerLinkedin}
            />
          }
          {
            <IconWithUrl
              contributer={contributer.twitter}
              imageSrc={contributertwitter}
            />
          }
          {
            <IconWithUrl
              contributer={contributer.facebook}
              imageSrc={contributerFacebook}
            />
          }
          {
            <IconWithUrl
              contributer={contributer.email}
              imageSrc={contributerEmail}
              media="email"
            />
          }
          {
            <IconWithUrl
              contributer={contributer.portfolioLink}
              imageSrc={contributerLink}
            />
          }
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
