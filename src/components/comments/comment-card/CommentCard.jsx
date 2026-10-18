import styles from "./CommentCard.module.css";

export default function CommentCard({
    comment,
    user,
    onDelete,
}) {
    const isAuthor = !!user && user.id === comment.author_id;

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
                        >
                            ✎
                        </button>

                        <button
                            type="button"
                            className={styles["comment-action-btn"]}
                            title="Delete comment"
                            aria-label="Delete comment"
                            onClick={() => onDelete(comment.id)}
                        >
                            ×
                        </button>
                    </div>
                )}
            </div>

            <p className={styles["comment-text"]}>
                {comment.text}
            </p>

            <span className={styles["comment-date"]}>
                {comment.updated_at
                    ? `Edited: ${comment.updated_at}`
                    : comment.created_at}
            </span>

        </div>
    );
}