import { useState } from "react";
import { toast } from "react-toastify";

import styles from "./CommentCard.module.css";
import formatDate from "../../../utils/formatDate";


export default function CommentCard({
    comment,
    user,
    onDelete,
    onEdit,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const isAuthor = !!user && user.id === comment.author_id;

    const cancelEditHandler = () => {
        setIsEditing(false);
    };

    const editCommentAction = async (formData) => {
        const text = formData.get("text")?.trim();

        if (!text) {
            toast.error("Comment cannot be empty!");
            return;
        }

        if (isSaving) return;

        setIsSaving(true);

        try {
            await onEdit(comment.id, text);

            toast.success("Comment updated successfully!");
            setIsEditing(false);
        } catch (error) {
            toast.error(error.message || "Failed to update comment.");
        } finally {
            setIsSaving(false);
        }
    };

    const deleteCommentHandler = async () => {
        if (isDeleting) return;

        const confirmed = window.confirm(
            "Are you sure you want to delete this comment?"
        );

        if (!confirmed) return;

        setIsDeleting(true);

        try {
            await onDelete(comment.id);

            toast.success("Comment deleted successfully!");
        } catch (error) {
            toast.error(error.message || "Failed to delete comment.");
        } finally {
            setIsDeleting(false);
        }
    };


    return (
        <div className={styles["comment-card"]}>
            <div className={styles["comment-header"]}>
                <span className={styles["comment-author"]}>
                    {comment.author}
                </span>

                {isAuthor && (
                    <div className={styles["comment-actions"]}>
                        <button
                            type="button"
                            className={`${styles["comment-action-btn"]} ${styles["edit-btn"]}`}
                            title="Edit comment"
                            aria-label="Edit comment"
                            onClick={() => setIsEditing(true)}
                            disabled={isSaving || isDeleting}
                        >
                            ✎
                        </button>

                        <button
                            type="button"
                            className={styles["comment-action-btn"]}
                            title="Delete comment"
                            aria-label="Delete comment"
                            onClick={deleteCommentHandler}
                            disabled={isSaving || isDeleting}
                        >
                            {isDeleting ? "..." : "×"}
                        </button>
                    </div>
                )}
            </div>

            {isEditing ? (
                <form
                    action={editCommentAction}
                    className={styles["comment-edit-form"]}
                    noValidate
                >
                    <textarea
                        name="text"
                        defaultValue={comment.text}
                        required
                        autoFocus
                        disabled={isSaving}
                    />

                    <div className={styles["comment-form-actions"]}>
                        <button
                            type="button"
                            onClick={cancelEditHandler}
                            disabled={isSaving}
                        >
                            Cancel
                        </button>

                        <button type="submit" disabled={isSaving}>
                            {isSaving ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            ) : (
                <p className={styles["comment-text"]}>
                    {comment.text}
                </p>
            )}

            <span className={styles["comment-date"]}>
                {comment.updated_at
                    ? `Edited: ${formatDate(comment.updated_at)}`
                    : formatDate(comment.created_at)}
            </span>
        </div>
    );
}