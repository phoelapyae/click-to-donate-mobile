import API from '@api';

export const useFetchBlogs = async () => {
  try {
    const {data} = await API.get('/updates');
    return data;
  } catch (e) {
    console.log('e', e);
  }
};
