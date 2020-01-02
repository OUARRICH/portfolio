import { get } from './request';
import config from '../config';

export const getExperiences = async () => {
    const response = await get(`${config.URL_API}/experiences`);
    const json = await response.json();
    return json;
};
