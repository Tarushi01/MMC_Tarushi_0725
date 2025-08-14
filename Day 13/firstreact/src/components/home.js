function Home()
{
 
        const developer = 'Tarushi Marchino';
        const teamSize = 10;
        const teamMembers = ['Apurva','Bhavya','Nikhil','Akshata'];
        const projectInfo={projectName:'Banking system', projectDuration:'2 months',projectStatus:'Completed',projectTeamMembers:['Nick','David','Julie','Roger'],projectTeamSize:10}
        return(
            <div>
                <h1>Welcome to Home Page</h1>
                <p> Developed by {developer} </p>
                <p>Team size is {teamSize}</p>
 
                <p>Team members are:</p>
 
            <ul>
                    {
                        teamMembers.map((member)=><li>{member}</li>)
                    }
            </ul>
 
            <h1>Project Details</h1>
            <h2>{projectInfo.projectName}</h2>
            <p>Project Duration is : {projectInfo.projectDuration}</p>
            <p>Project status is: {projectInfo.projectStatus}</p>
            <p>Project team members are</p>
            <ul>
                {
                    projectInfo.projectTeamMembers.map((member)=><li>{member}</li>)
                }
            </ul>
            <p>Project team size is: {projectInfo.projectTeamSize}</p>
            </div>
        )
}
 
export default Home;
 