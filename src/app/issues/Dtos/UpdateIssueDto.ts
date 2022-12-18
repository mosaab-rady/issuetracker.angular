export interface UpdateIssueDto {
  id: string;
  title: string;
  description: string;
  targetResolutionDate: Date;
  resolutionSummary: string;
}
