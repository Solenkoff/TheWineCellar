import { useContext, useEffect, useReducer, useState } from "react";

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
    const { user } = useContext(AuthContext);

    useEffect(() => {
        commentApi.getAll(itemId)
            .then(result => {
                dispatch({ type: 'SET_COMMENTS', payload: result });
            })
            .catch(error => {
                alert(error.message);
            });
    }, [itemId]);

    const commentAddedHandler = (comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
        });

        setIsAdding(false);
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