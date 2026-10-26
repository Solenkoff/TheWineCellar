import { useContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";

import AuthContext from "../../../contexts/auth-context";
import { commentReducer } from "../comment-reducer";
import { commentApi } from "../../../api";

import styles from "./CommentList.module.css";
import CommentCard from "../comment-card/CommentCard";
import CommentCreate from "../comment-create/CommentCreate";

export default function CommentList({
    itemId,
}) {
    const [comments, dispatch] = useReducer(commentReducer, []);
    const [isAdding, setIsAdding] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        let cancelled = false;

        const loadComments = async () => {
            setIsLoading(true);
            setLoadError(false);

            try {
                const result = await commentApi.getAll(itemId);

                if (!cancelled) {
                    dispatch({
                        type: "SET_COMMENTS",
                        payload: result,
                    });
                }
            } catch (error) {
                if (!cancelled) {
                    setLoadError(true);
                    toast.error(error.message || "Failed to load comments.");
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        };

        loadComments();

        return () => {
            cancelled = true;
        };

    }, [itemId]);

    const commentAddedHandler = (comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
        });

        setIsAdding(false);
    };

    const editCommentHandler = async (commentId, text) => {
        const result = await commentApi.update(commentId, text);

        if (!result?.length) {
            throw new Error("Comment could not be updated.");
        }

        dispatch({
            type: 'UPDATE_COMMENT',
            payload: result[0],
        });
    };

    const deleteCommentHandler = async (commentId) => {
        const result = await commentApi.remove(commentId);

        if (!result?.length) {
            throw new Error("Comment could not be deleted.");
        }

        dispatch({
            type: "DELETE_COMMENT",
            payload: commentId,
        });
    };


    return (
        <section className={styles["comments-section"]}>
            <h3 className={styles["comments-heading"]}>
                Comments:
            </h3>


            <div className={styles["comments-layout"]}>

                {isLoading ? (
                    <p>Loading comments...</p>
                ) : loadError ? (
                    <p>Comments could not be loaded. Please refresh the page.</p>
                ) : comments.length > 0 ? (
                    <div className={styles["comments-list"]}>
                        {comments.map(comment => (
                            <CommentCard
                                key={comment.id}
                                comment={comment}
                                user={user}
                                onDelete={deleteCommentHandler}
                                onEdit={editCommentHandler}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles["no-comment-yet"]}>
                        <p>No comments on this piece yet.</p>
                        {user && (
                            <p>Be the first to share your thoughts or ask the owner a question!</p>
                        )}
                    </div>
                )}


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
                            <CommentCreate
                                itemId={itemId}
                                user={user}
                                onCommentAdded={commentAddedHandler}
                                onCancel={() => setIsAdding(false)}
                            />
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}