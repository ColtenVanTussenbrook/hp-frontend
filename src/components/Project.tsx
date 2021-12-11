import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProjectObj from '../types/ProjectObj.d';
import { ConvertDate } from '../util/helpers';

interface Props {
  endpoint: string;
}

const Project: React.FC<Props> = ({ endpoint }) => {
  const [projData, setProjData] = useState<ProjectObj>();

  let { id } = useParams();
  let idEndpoint:string = endpoint + `/${id}`;

  useEffect(() => {
    axios.get(idEndpoint).then((response) => {
      setProjData(response.data);
    } )
  }, []);

  if (projData) {
    let date =ConvertDate(projData.dueDate);
    return (
      <div className="project-page">
        <h1 className="project-header">{projData.projectName}</h1>
        <p><strong>Description: </strong> {projData.projectDescription}</p>
        <p><strong>Due Date: </strong> {date}</p>
        <p><strong>Materials Needed: </strong></p>
        <p><strong>In Progress: </strong></p>
        <button>Back to Dashboard</button>
      </div>
    );
  } else return null;

  

  
}

export default Project;