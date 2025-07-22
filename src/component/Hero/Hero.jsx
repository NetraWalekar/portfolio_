import './Hero.css'
import mail from './../../assets/mail.png'
import file from './../../assets/file.png'
import github from './../../assets/github.svg'
import linke from './../../assets/linke.png'

export default function Hero() {
    return (
           <div className='hero-container'>
            <div>
                <div style={{fontSize:'40px',textAlign:'left',lineHeight:0.2}}>Hey there,</div>
                <div style={{fontSize: '70px',textAlign:'left'}}>I'm <span style={{color:'oklch(80.2% .134 225)',fontWeight:'bold'}}>Netra Walekar</span></div>
                <p>A curious and creative developer, always learning, building, and <br /> solving real-world problems with clean code and good vibes. 🚀</p>
                <div className='btn_container'>
                    <button className='hero-btn'><img src={mail} alt="" /><span>Get in touch</span></button>
                    <button className='hero-btn'><img src={file} alt="" /><span>Resume</span></button>
                </div>
                <div className='social-icon'>
                    <img src={github} alt="" />
                    <img src={linke} alt="" />
                  
                </div>
            </div>
           </div>
    )
}