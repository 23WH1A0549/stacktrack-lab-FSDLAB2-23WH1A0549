import { fetchTasks } from "../api/client";

useEffect(() => {
  fetchTasks().then(data => setTasks(data));
}, []);