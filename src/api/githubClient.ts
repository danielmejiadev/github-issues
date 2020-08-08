// Depedencies
import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Resources
import Issues from './issues';

/**
 * Github client for API connection.
 * @author Daniel Mejia
 * @class GithubClient
 */
export class GithubClient {
  axiosInstance!: AxiosInstance;
  
  issues!: Issues;

  /**
   * Initialze the github client base on url.
   */
  constructor() {
    this.axiosInstance = axios.create({ baseURL: 'https://api.github.com' });
    this.addResponseInterceptor(this.basicResponse);
    this.issues = new Issues(this.axiosInstance);
    return this;
  }

  /**
   * Add a response interceptor for client.
   * @param { Function } callback The callback to add.
   * @returns { object } The github client itself.
   */
  addResponseInterceptor(callback: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>) {
    const { interceptors } = this.axiosInstance;
    interceptors.response.use(callback);
    return this;
  }

  /**
   * Intercepts every response.
   * @param { Object } response The response.
   * @returns { object } The new response parsed.
   */
  basicResponse = (response: AxiosResponse) => response.data;
}

export default new GithubClient();