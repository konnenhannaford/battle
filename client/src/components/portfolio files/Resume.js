import PDF from '../../images/Konnen Hannaford Web Resume.pdf';
export default function Resume() {

return (

        
<div className="card home">
        <div className="card-content">
            <p className="title is-1 ">Skills and Resume</p>
        
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>JS Query</p>
            <p>Bulma / Tailwind / Bootstrap</p>
            <p>Mysql</p>
            <p>MongoDB</p>
            <p>Express</p>
            <p>Inquirer</p>
            <p>Node</p>            
            <a href={PDF} target="_self" rel="noreferral" mb={4}>Download Resume</a>
        </div>
</div>
        
    )
}


