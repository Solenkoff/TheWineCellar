import { useState } from "react";
import CommentCard from "./comment-card/CommentCard";

import styles from "./CommentList.module.css";
import request from "../../utils/request";

export default function CommentList({
    itemId,
    user,
}) {
    const [isAdding, setIsAdding] = useState(false);
    const [commentText, setCommentText] = useState("");

    const comments = [
        {
            id: 1,
            author: "Pesho",
            text: "Is this chair still available?",
            created_at: "October 21, 2026 - 14:30"
        },
        {
            id: 2,
            author: "Gana",
            text: "Would you consider a lower price?",
            created_at: "October 20, 2026 - 19:15"
        },
        {
            id: 3,
            author: "Taralianku",
            text: "Beautiful vintage chair!",
            created_at: "October 19, 2026 - 11:05"
        }
    ];

    const addCommentAction = async (formData) => {
        const newComment = {
            text: formData.get('text'),
            author: user.email,
            item_id: itemId,
        }

        try {
            await request('/comments', 'POST', newComment);
            
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <section className={styles["comments-section"]}>
            <h3 className={styles["comments-heading"]}>
                Comments:
            </h3>

            <div className={styles["comments-layout"]}>

                <div className={styles["comments-list"]}>
                    {comments.map(comment => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                        />
                    ))}
                </div>

                {user && (
                    <div className={styles["comments-add-area"]}>
                        {!isAdding ? (
                            <button
                                className={styles["add-comment-btn"]}
                                onClick={() => setIsAdding(true)}
                            >
                                Add Comment
                            </button>
                        ) : (
                            <form
                                className={styles["comment-form"]}
                                action={addCommentAction}
                            >
                                <h4>Your comment below</h4>

                                <textarea
                                    name="text"
                                    placeholder="Comment..."
                                />

                                <div className={styles["comment-form-actions"]}>
                                    <button type="button" onClick={() => setIsAdding(false)}>
                                        Cancel
                                    </button>

                                    <button type="submit">
                                        Add
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}