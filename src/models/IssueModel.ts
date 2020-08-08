// Models
import { LabelModel } from "./LabelModel";

export interface IssueModel {
  id: number;
  number: number;
  url: string;
  labels: LabelModel[];
  body: string;
  title: string;
  state: string;
  html_url: string;
}