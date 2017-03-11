import { OdataDbSet } from 'odata-context';

import {
    ITaskStatusModel,
    ITaskStatusModelProperties,
    ITaskStatusModelNavigationProperties,
    ITaskStatusModelOdataNavigationProperties,
    ITaskStatusModelExpandables,
    ITaskStatusModelSelectables,
    ITaskStatusModelFilterables,
    ITaskStatusModelOrderBy,
    ITaskStatusModelKeys,
    ITaskStatusModelActions
} from './TaskManager.Models.TaskStatus';

import {
    IProjectModel,
    IProjectModelProperties,
    IProjectModelNavigationProperties,
    IProjectModelOdataNavigationProperties,
    IProjectModelExpandables,
    IProjectModelSelectables,
    IProjectModelFilterables,
    IProjectModelOrderBy,
    IProjectModelKeys,
    IProjectModelActions
} from './TaskManager.Models.Project';

import {
    ITaskActionModel,
    ITaskActionModelProperties,
    ITaskActionModelNavigationProperties,
    ITaskActionModelOdataNavigationProperties,
    ITaskActionModelExpandables,
    ITaskActionModelSelectables,
    ITaskActionModelFilterables,
    ITaskActionModelOrderBy,
    ITaskActionModelKeys,
    ITaskActionModelActions
} from './TaskManager.Models.TaskAction';

import {
    IProjectTaskModel,
    IProjectTaskModelProperties,
    IProjectTaskModelNavigationProperties,
    IProjectTaskModelOdataNavigationProperties,
    IProjectTaskModelExpandables,
    IProjectTaskModelSelectables,
    IProjectTaskModelFilterables,
    IProjectTaskModelOrderBy,
    IProjectTaskModelKeys,
    IProjectTaskModelActions
} from './TaskManager.Models.ProjectTask';

export interface IOdataSets {
    TaskStatus: OdataDbSet<ITaskStatusModel, ITaskStatusModelProperties, ITaskStatusModelNavigationProperties, ITaskStatusModelOdataNavigationProperties, ITaskStatusModelExpandables, ITaskStatusModelSelectables, ITaskStatusModelFilterables, ITaskStatusModelOrderBy, ITaskStatusModelKeys, ITaskStatusModelActions>;
    Projects: OdataDbSet<IProjectModel, IProjectModelProperties, IProjectModelNavigationProperties, IProjectModelOdataNavigationProperties, IProjectModelExpandables, IProjectModelSelectables, IProjectModelFilterables, IProjectModelOrderBy, IProjectModelKeys, IProjectModelActions>;
    TaskActions: OdataDbSet<ITaskActionModel, ITaskActionModelProperties, ITaskActionModelNavigationProperties, ITaskActionModelOdataNavigationProperties, ITaskActionModelExpandables, ITaskActionModelSelectables, ITaskActionModelFilterables, ITaskActionModelOrderBy, ITaskActionModelKeys, ITaskActionModelActions>;
    ProjectTasks: OdataDbSet<IProjectTaskModel, IProjectTaskModelProperties, IProjectTaskModelNavigationProperties, IProjectTaskModelOdataNavigationProperties, IProjectTaskModelExpandables, IProjectTaskModelSelectables, IProjectTaskModelFilterables, IProjectTaskModelOrderBy, IProjectTaskModelKeys, IProjectTaskModelActions>;
}
