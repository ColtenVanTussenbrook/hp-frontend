export default interface ProjectObj {
  createdAt: string;
  projectName: string;
  projectDescription: string;
  id: string;
  projectId: number;
  dueDate: string;
  inProgress?: boolean;
}