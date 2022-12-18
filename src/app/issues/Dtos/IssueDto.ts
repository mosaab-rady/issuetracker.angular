export interface IssueDto {
  id: string;
  title: string;
  description: string;
  createdOn: Date;
  createdBy: string;
  targetResolutionDate?: Date;
  actualResolutionDate?: Date;
  status: string;
  priority?: Priority;
  projectName: string;
  resoliotionSummary?: string;
}

interface Priority {
  id: string;
  name: string;
  color: string;
}
