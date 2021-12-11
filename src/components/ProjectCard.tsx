import React from 'react';
import ProjectObj from '../types/ProjectObj.d';
import { Link } from 'react-router-dom';
import { ConvertDate } from '../util/helpers';

interface Props {
  projData: ProjectObj;
}

const ProjectCard: React.FC<Props> = ({projData}) => {

  const { projectName, projectDescription, dueDate, inProgress } = projData;

  let date = ConvertDate(dueDate);

  return (
    <div className="project">
      <p><strong>Project Name: </strong>{projectName}</p>
      <p><strong>Description: </strong>{projectDescription}</p>
      <p><strong>Project Due Date: </strong>{date}</p>
      <p>{inProgress ? 'In progress' : 'Not in progress'}</p>
      <Link to={`/project/${projData.id}`}>Link</Link>
    </div>
  );
}

export default ProjectCard;