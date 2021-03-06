import { combineReducers } from 'redux';
import features from './feature-toggle';
import featureTypes from './feature-type';
import featureMetrics from './feature-metrics';
import featureTags from './feature-tags';
import tagTypes from './tag-type';
import tags from './tag';
import strategies from './strategy';
import history from './history'; // eslint-disable-line
import archive from './archive';
import error from './error';
import settings from './settings';
import user from './user';
import applications from './application';
import uiConfig from './ui-config';
import context from './context';
import projects from './project';
import addons from './addons';
import userAdmin from './e-user-admin';
import apiAdmin from './e-api-admin';
import authAdmin from './e-admin-auth';

const unleashStore = combineReducers({
    features,
    featureTypes,
    featureMetrics,
    strategies,
    tagTypes,
    tags,
    featureTags,
    history,
    archive,
    error,
    settings,
    user,
    applications,
    uiConfig,
    context,
    projects,
    addons,
    userAdmin,
    apiAdmin,
    authAdmin,
});

export default unleashStore;
