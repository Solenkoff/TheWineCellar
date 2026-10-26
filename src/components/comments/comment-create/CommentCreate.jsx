import { useState } from "react";
import { toast } from "react-toastify";

import styles from "./CommentCreate.module.css";
import { commentApi } from "../../../api";


export default function CommentCreate({
    itemId,
    user,
    onCommentAdded,
    onCancel,
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const addCommentAction = async (formData) => {
        const text = formData.get("text")?.trim();

        if (!text) {
            toast.error("Please enter a comment.");
            return;
        }

        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const result = await commentApi.create(
                itemId,
                text,
                user.user_metadata?.username || "Fellow Rescuer"
            );

            onCommentAdded(result[0]);

            toast.success("Comment added successfully!");
        } catch (error) {
            toast.error(error.message || "Failed to add comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <form
            className={styles["comment-form"]}
            action={addCommentAction}
            noValidate
        >
            <h4>Your comment below</h4>

            <textarea
                name="text"
                placeholder="Comment..."
                required
                autoFocus
            />

            <div className={styles["comment-form-actions"]}>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding..." : "Add"}
                </button>
            </div>
            
        </form>
    );
}