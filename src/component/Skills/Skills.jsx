import js from './../../assets/js.png'
import react from './../../assets/atom.png'
import mongo from './../../assets/mongo.png'
import './Skills.css'
import html2 from './../../assets/icons8-html.svg'
import css2 from './../../assets/icons8-css.svg'
import js2 from './../../assets/icons8-javascript.svg'
import ex2 from './../../assets/icons8-express-js.svg'
import node from './../../assets/icons8-node-js.svg'



export default function Skills() {
    return (
        <div className='container'>
            <h1>Skills</h1>

            <div className='skill-icon'>
                <img src={html2} alt="" />
                <img src={css2} alt="" />
                <img src={js2} alt="" />
                <img src={node} alt="" />
            </div>
            <div className='skill-icon'>
                 <img src={react} alt="" />     
                <img src={ex2} alt="" />  
                 <img src={mongo} alt="" />     

            </div>
        </div>
    )
}