// Dependencies
import { AxiosInstance, AxiosRequestConfig } from 'axios';

// Models
import { IssueModel } from '../models/IssueModel';

export class Issues {
  axiosInstance!: AxiosInstance;

  /**
   * Creates an instance of Issues resource.
   * @param axiosInstance 
   */
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
   * Gets the issues for a given repository.
   * @param repoOwner The owner of repository.
   * @param repo The repository name.
   * @param requestParams The request configuration params.
   */
  getRepoIssues(repoOwner: string, repo: string, requestParams?: AxiosRequestConfig): Promise<IssueModel[]> {
    return this.axiosInstance
      .get(`/repos/${repoOwner}/${repo}/issues`, requestParams);
  }
}

export default Issues;