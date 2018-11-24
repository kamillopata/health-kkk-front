const rootUrl = 'http://195.62.13.129:8000/v1/';
const download = async (path, params) => {
  const result = await fetch(`${rootUrl}${path}`, params);
  return result.json();
};

export default {
  async getTimetable() {
    const result = await download('timetables');
    return result.timetables;
  },
};
