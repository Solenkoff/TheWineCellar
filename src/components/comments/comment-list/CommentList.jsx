import { useContext, useEffect, useReducer, useState } from "react";

import AuthContext from "../../../contexts/auth-context";
import { commentReducer } from "../comment-reducer";
import { commentApi } from "../../../api";

import styles from "./CommentList.module.css";
import CommentCard from "../comment-card/CommentCard";

export default function CommentList({
    itemId,
}) {
    const [comments, dispatch] = useReducer(commentReducer, []);
    const [isAdding, setIsAdding] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        commentApi.getAll(itemId)
            .then(result => {
                dispatch({type: 'SET_COMMENTS', payload: result});
            })
            .catch(error => {
                alert(error.message);
            });
    }, [itemId]);


    const addCommentAction = async (formData) => {
        const text = formData.get('text')?.trim();

        if (!text) {
            alert('Please enter a comment.');
            return;
        }

        try {
            const result = await commentApi.create(
                itemId,
                text,
                user.user_metadata?.username || "Fellow Rescuer",
            )

            dispatch(state => [result[0], ...state]);
            setIsAdding(false);
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

                {comments.length > 0
                    ?
                    <div className={styles["comments-list"]}>
                        {comments.map(comment => (
                            <CommentCard
                                key={comment.id}
                                comment={comment}
                            />
                        ))}
                    </div>
                    :
                    <div className={styles["no-comment-yet"]}>
                        <p >No comments on this piece yet.</p>
                        {user && (
                            <p >Be the first to share your thoughts or ask the owner a question!</p>
                        )}
                    </div>
                }


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
                                    required
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