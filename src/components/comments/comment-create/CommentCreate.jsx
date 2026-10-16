import { commentApi } from "../../../api";
import styles from "./CommentCreate.module.css"

export default function CommentCreate({
    itemId,
    user,
    onCommentAdded,
    onCancel,
}) {

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

            onCommentAdded(result[0]);

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form
            className={styles["comment-form"]}
            action={addCommentAction}
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

                <button type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}