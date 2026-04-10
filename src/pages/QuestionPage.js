import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchTasks } from "../api/client";

function QuestionPage() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const [params, setParams] = useSearchParams();
  const query = params.get("query") || "";

  useEffect(() => {
    fetchTasks(query).then(data => setTasks(data));
  }, [query]);

  const handleSearch = () => {
    setParams({ query: input });
  };

  return (
    <div>
      <h2>Task Search</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.desc}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuestionPage;