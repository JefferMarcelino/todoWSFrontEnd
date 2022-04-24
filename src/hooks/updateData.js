import { url } from '../App';

const useUpdateData = async (setTasks) => {
  const dataResponse = await fetch(`${url}v1/task/all`);
  const data = await dataResponse.json();

  setTasks(data.response);
};

export default useUpdateData;
