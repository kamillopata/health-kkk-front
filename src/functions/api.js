// const rootUrl = 'http://195.62.13.129:8000/v1/';
// const download = async (path, params) => fetch(`${rootUrl}${path}`, params);

export default {
  async getTimetable() {
    // const result = await download('timetables');

    // eslint-disable-next-line
    const result = {"timetables":[{"duration":"annual","startDate":{"date":"2018-11-24 14:03:17.296484","timezone_type":3,"timezone":"UTC"},"endDate":{"date":"2020-11-24 14:03:17.296491","timezone_type":3,"timezone":"UTC"},"done":false,"disabled":false,"examination":{"name":"Echo serca","defaultFrequency":"daily","description":"Lorem ipsum dolor sit amet"}},{"duration":"daily","startDate":{"date":"2018-11-24 14:03:17.296494","timezone_type":3,"timezone":"UTC"},"endDate":{"date":"2020-11-24 14:03:17.296497","timezone_type":3,"timezone":"UTC"},"done":false,"disabled":false,"examination":{"name":"Echo serca","defaultFrequency":"daily","description":"Lorem ipsum dolor sit amet"}},{"duration":"monthly","startDate":{"date":"2018-11-24 14:03:17.296499","timezone_type":3,"timezone":"UTC"},"endDate":{"date":"2020-11-24 14:03:17.296502","timezone_type":3,"timezone":"UTC"},"done":true,"disabled":false,"examination":{"name":"Echo serca","defaultFrequency":"daily","description":"Lorem ipsum dolor sit amet"}},{"duration":"monthly","startDate":{"date":"2018-11-24 14:03:17.296504","timezone_type":3,"timezone":"UTC"},"endDate":{"date":"2020-11-24 14:03:17.296506","timezone_type":3,"timezone":"UTC"},"done":true,"disabled":true,"examination":{"name":"Echo serca","defaultFrequency":"daily","description":"Lorem ipsum dolor sit amet"}}]}

    return result.timetables;
  },
};
