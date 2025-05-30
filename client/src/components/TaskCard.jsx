import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
    const { deleteTask, toggleTaskDone } = useTasks();
    const navigate = useNavigate();

    const handleDone = async () => {
        await toggleTaskDone(task.id);
    };

    return (
        <div className="bg-zinc-700 text-white rounded-md p-4">
            <header className="flex justify-between">
                <h2 className="text-sm font-bold">{task.title}</h2>
                <span>{task.done == 1 ? "️✅️" : "❌"}</span>
            </header>
            <p className="text-xs">{task.description}</p>
            <span>{task.createAt}</span>
            <div className="flex gap-x-1 mt-4">
                <button
                    className="bg-blue-300 rounded px-2 py-1 text-black cursor-pointer"
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
                <button
                    className="bg-blue-300 rounded px-2 py-1 text-black cursor-pointer"
                    onClick={() => navigate(`/edit/${task.id}`)}
                >
                    Edit
                </button>
                <button
                    className="bg-blue-300 rounded px-2 py-1 text-black cursor-pointer"
                    onClick={() => handleDone(task.done)}
                >
                    Toggle Task
                </button>
            </div>
        </div>
    );
}

export default TaskCard;