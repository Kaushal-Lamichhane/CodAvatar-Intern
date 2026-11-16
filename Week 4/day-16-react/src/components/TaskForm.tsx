
import { useState } from "react";
interface TaskFormProps {
    onCreateTask:(title: string)=> void;
}

interface TaskFormProps {
    onCreateTask: (title: string) => void;
}

function TaskForm({ onCreateTask }: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const trimmedTitle = title.trim();

        if (trimmedTitle.length < 5) {
            setError("Title must be at least 5 characters.");
            return;
        }

        if (trimmedTitle.length > 80) {
            setError("Title cannot exceed 80 characters.");
            return;
        }

        setError("");
        setIsSubmitting(true);

        try {
            await new Promise((resolve) =>
                setTimeout(resolve, 1500)
            );

            // Temporary failure test
            if (trimmedTitle.toLowerCase().includes("fail")) {
                throw new Error("Simulated submission failure.");
            }

            console.log("Task created:", trimmedTitle);
            onCreateTask(trimmedTitle);

            // Clear input after success
            setTitle("");

        } catch (error) {
            setError("Failed to create task. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Create New Task</h2>

                <input
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(event) => {setTitle(event.target.value);
                        setError("");
                    }}
                    disabled={isSubmitting}
                />

                {error && (
                    <p style={{ color: "red" }}>
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Creating..." : "Create Task"}
                </button>

                <p>Preview: {title}</p>
            </form>
        </section>
    );
}

export default TaskForm;
