import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import ProjectObj from '../types/ProjectObj.d';

interface Props {
  endpoint: string;
}

const ProjectDashboard: React.FC<Props> = ({endpoint}) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((response) => {
      setProjects(response.data);
    })
  }, []);

  if (projects.length > 0) {
    return (
      <div className="project-dashboard">
        {
          projects.map((project: ProjectObj) => {
            return <ProjectCard key={project.id} projData={project} />
          })
        }
      </div>
    )
  } else return <>No projects yet</>;

}

export default ProjectDashboard;