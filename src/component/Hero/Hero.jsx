import bulb from './../../assets/light-bulb.png'
import './Hero.css'

export default function Hero() {
    return (
        <div>
            <div className="p-10 h-15vh bg-black text-white">

                <div>
                    <img src={bulb} alt="" className='h-15 transform rotate-180 fixed top-0 left-1/2 swing-slow drop-shadow-white' />
                </div>
        
                <div>
                    <div className=''>Hey there,</div>
                    <div>I'm Netra Walekar</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolorem voluptatum, porro animi, molestias consequatur sint doloribus, vitae alias recusandae maxime facere. Rerum, unde. Expedita perferendis maxime laboriosam facilis atque.</div>
                    <div><button>Get in touch</button></div>
                    <div><button>My Resume</button></div>
                </div>
                <div>photo</div>
            </div>
        </div>
    )
}