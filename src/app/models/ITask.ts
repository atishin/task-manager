import { IProject }  from 'models/types';

export interface ITask {
  project: IProject;
  checked: boolean;
}
