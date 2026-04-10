// TODO: Set the base URL for your API

const BASE_URL = "http://localhost:3000";

export const fetchTasks = async (query = "") => {
  const res = await fetch(`${BASE_URL}/tasks?query=${query}`);
  return res.json();
};