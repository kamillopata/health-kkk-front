const rootUrl = 'http://195.62.13.129:8000/v1/';
const download = async (path, params) => {
  const result = await fetch(`${rootUrl}${path}`, params);
  return result.json();
};

export default {
  async getTimetables() {
    const result = await download('timetables');
    return result.timetables;
  },
  async getProfiles() {
    const result = await download('profiles');
    return result.profiles;
  },
};
