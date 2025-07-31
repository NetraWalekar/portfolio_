import './Hero.css'
import mail from './../../assets/mail.png'
import file from './../../assets/file.png'
import linkedin from './../../assets/linkedin.png'
import pf from './../../assets/pf.svg'
import github from './../../assets/icons8-github.svg'

export default function Hero() {
    return (
           <div className='hero-container'>
            <div>
                <div style={{fontSize:'50px',textAlign:'left',paddingTop:'70px',lineHeight:0.2}}>Hey there,</div>
                <div style={{fontSize: '90px',textAlign:'left'}}>I'm <span className='name'>Netra</span></div>
                <p>A curious and creative developer, always learning, building, <br /> and solving real-world problems with clean code and good vibes. 🚀</p>
                <div className='btn_container'>
                    <a href="mailto:netrawalekar6@gmail.com"><button className='hero-btn'><img src={mail} alt="" /><span>Get in touch</span></button></a>
                    <button className='hero-btn'><img src={file} alt="" /><span>Resume</span></button>
                </div>
                <div className='social-icon'>
                    <a href="https://github.com/NetraWalekar"><img src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/netra-walekar-45283a2a7"><img src={linkedin} alt="" height={100}/></a>
                  
                </div>
            </div>
            <div><img src={pf} alt="" /></div>
           </div>
    )
}