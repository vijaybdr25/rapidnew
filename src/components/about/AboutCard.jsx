import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout1 } from "../../dummydata"
import { homeAbout2 } from "../../dummydata"
import Awrapper from "./Awrapper"



const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
      <div id="centext"><Heading subtitle='SERVICES OFFERED' title='Where Expertise Meets Innovation' /></div>
        <div className='container flexSB'>
          {/* <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div> */}
          <div className='left row'>
            {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
            <div className='items'>
              {homeAbout1.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='right row'>
            {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
            <div className='items'>
              {homeAbout2.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
      <div className='container'>
          <Heading subtitle='Our Financial Partners' title='' />
      </div>
      <section className='marquee'>
        <div className='container'>
          <div className='marquee-images'>
          <img src='./PNB.png' alt='Partner 1' />
          <img src='./HDFC.png' alt='Partner 2' />
          <img src='./AXIS.png' alt='Partner 3' />
          <img src='./Kotak.png' alt='Partner 4' />
          <img src='./BOI.png' alt='Partner 5' />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
