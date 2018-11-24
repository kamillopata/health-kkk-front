const rootUrl = 'http://195.62.13.129:8000/v1/';

const get = async (path, params) => {
  const result = await fetch(`${rootUrl}${path}`, params);
  return result.json();
};

const post = () => {};
const patch = () => {};

export default {
  async getTimetable(timetableId) {
    const result = await get(`timetables/${timetableId}`);
    return result.timetables;
  },
  async getProfiles() {
    const result = await get('profiles');
    return result.profiles;
  },
  async getProfile(profileId) {
    const result = await get(`profiles/${profileId}`);
    return result.profile;
  },
  async postProfile(data) {
    const result = await post('profiles', data);
    return result.profiles;
  },
  async patchProfile(profileId, data) {
    const result = await patch(`profiles/${profileId}`, data);
    return result.profiles;
  },
  async getExaminations() {
    const result = await get('examinations');
    return result.examinations;
  },
};
