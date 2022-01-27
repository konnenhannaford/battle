import profilepic from '../../images/profpic.jpeg'


export default function Home() {

    return (
    <div className="card home">
        <div className="card-content">
            <p className="about-me-header">About Me</p>
            <br/>
            <img className="profpic" src= {profilepic} />
            <p>Hi there and welcome to my page </p>
                <br/>
            <p>I am currently undertaking a full stack development course with Sydney Uni.  I hope to gain the skills 
                that will prepare me for working in this industry.  I hope to learn further skills in coding to 
                prepare myself for future roles that may be dependent on this technology.</p>
            <br/>
            <p>I am currently undertaking a full stack development course with Sydney Uni and Trilogy Education.</p>
            <p>I hope to gain skills that I can take forward in a new career path. Coding is a modern technology that will hopefully open the doors to a range of areas for my future employment.</p>
            <p>I am excited about learning these new technologies and gaining further understanding of where I would like to end up</p>
            <br/>
            <p>Currently I have covered several languages and aspects of Web Development through this course and we have just started. Theres plenty to come.  Have a look at my portfolio and check out some of my work.</p>
        </div>
    </div>

    )
}
