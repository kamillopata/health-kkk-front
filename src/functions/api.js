import Store from '../store';

const rootUrl = 'http://195.62.13.129:8000/v1/';

const request = async (method, path, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (Store.state.token) {
    headers.append('Authorization', `Bearer ${Store.state.token}`);
  }

  const init = {
    method,
    body: JSON.stringify(body),
    headers,
  };

  const result = await fetch(`${rootUrl}${path}`, init);
  return result.json();
};

const get = async (path, body) => request('GET', path, body);
const post = async (path, body) => request('POST', path, body);
const patch = async (path, body) => request('PATCH', path, body);

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
    data.age = Number.parseInt(data.age);
    const result = await post('profiles', data);
    return result.profiles;
  },
  async patchProfile(data) {
    const result = await patch(`profiles/${data.id}`, data);
    return result.profiles;
  },
  async getExaminations() {
    const result = await get('examinations');
    return result.examinations;
  },
  async login(credentials) {
    const response = await post('login', credentials);
    return response.token;
  },
  async register(credentials) {
    const response = await post('register', credentials);
    return response.token;
  },
};
