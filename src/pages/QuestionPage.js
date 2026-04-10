// import { fetchTasks } from "../api/client";

// useEffect(() => {
//   fetchTasks().then(data => setTasks(data));
// }, []);
const [params, setParams] = useSearchParams();
const query = params.get("query") || "";

useEffect(() => {
  fetchTasks(query).then(data => setTasks(data));
}, [query]);

const handleSearch = () => {
  setParams({ query: input });
};