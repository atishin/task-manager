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

import {
    IApplicationUserModel,
    IApplicationUserModelProperties,
    IApplicationUserModelNavigationProperties,
    IApplicationUserModelOdataNavigationProperties,
    IApplicationUserModelExpandables,
    IApplicationUserModelSelectables,
    IApplicationUserModelFilterables,
    IApplicationUserModelOrderBy,
    IApplicationUserModelKeys,
    IApplicationUserModelActions
} from './TaskManager.Models.ApplicationUser';

import {
    IIdentityUserRoleModel,
    IIdentityUserRoleModelProperties,
    IIdentityUserRoleModelNavigationProperties,
    IIdentityUserRoleModelOdataNavigationProperties,
    IIdentityUserRoleModelExpandables,
    IIdentityUserRoleModelSelectables,
    IIdentityUserRoleModelFilterables,
    IIdentityUserRoleModelOrderBy,
    IIdentityUserRoleModelKeys,
    IIdentityUserRoleModelActions
} from './Microsoft.AspNet.Identity.EntityFramework.IdentityUserRole';

import {
    IIdentityUserClaimModel,
    IIdentityUserClaimModelProperties,
    IIdentityUserClaimModelNavigationProperties,
    IIdentityUserClaimModelOdataNavigationProperties,
    IIdentityUserClaimModelExpandables,
    IIdentityUserClaimModelSelectables,
    IIdentityUserClaimModelFilterables,
    IIdentityUserClaimModelOrderBy,
    IIdentityUserClaimModelKeys,
    IIdentityUserClaimModelActions
} from './Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim';

import {
    IIdentityUserLoginModel,
    IIdentityUserLoginModelProperties,
    IIdentityUserLoginModelNavigationProperties,
    IIdentityUserLoginModelOdataNavigationProperties,
    IIdentityUserLoginModelExpandables,
    IIdentityUserLoginModelSelectables,
    IIdentityUserLoginModelFilterables,
    IIdentityUserLoginModelOrderBy,
    IIdentityUserLoginModelKeys,
    IIdentityUserLoginModelActions
} from './Microsoft.AspNet.Identity.EntityFramework.IdentityUserLogin';

 export type ITaskStatus = ITaskStatusModel & Partial<ITaskStatusModelNavigationProperties> & Partial<ITaskStatusModelActions>;

 export type IProject = IProjectModel & Partial<IProjectModelNavigationProperties> & Partial<IProjectModelActions>;

 export type ITaskAction = ITaskActionModel & Partial<ITaskActionModelNavigationProperties> & Partial<ITaskActionModelActions>;

 export type IProjectTask = IProjectTaskModel & Partial<IProjectTaskModelNavigationProperties> & Partial<IProjectTaskModelActions>;

 export type IApplicationUser = IApplicationUserModel & Partial<IApplicationUserModelNavigationProperties> & Partial<IApplicationUserModelActions>;

 export type IIdentityUserRole = IIdentityUserRoleModel & Partial<IIdentityUserRoleModelNavigationProperties> & Partial<IIdentityUserRoleModelActions>;

 export type IIdentityUserClaim = IIdentityUserClaimModel & Partial<IIdentityUserClaimModelNavigationProperties> & Partial<IIdentityUserClaimModelActions>;

 export type IIdentityUserLogin = IIdentityUserLoginModel & Partial<IIdentityUserLoginModelNavigationProperties> & Partial<IIdentityUserLoginModelActions>;

