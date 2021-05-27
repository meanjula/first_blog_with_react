import Course from './course'
const Courses = (props) =>{
    const{repos}=props
    return(
      <div id="courses">
        <h1 className="section-title">Courses</h1>
        <div className ='course-wrapper'>
          {repos.map((repo) =><Course key ={repo.name}course ={repo}/>)}
        </div>  
    </div>
    )
  }
export default Courses