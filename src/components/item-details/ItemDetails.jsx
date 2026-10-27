import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import styles from "./ItemDetails.module.css";
import useAuth from "../../hooks/useAuth";
import { itemApi } from "../../api";
import request from "../../utils/request";
import CommentList from "../comments/comment-list/CommentList";

export default function ItemDetails() {
    const { user } = useAuth();
    const { itemId } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const [isDeleting, setIsDeleting] = useState(false);

    const isOwner = user && user?.id === item?.owner_id;

    useEffect(() => {
        let cancelled = false;

        const loadItem = async () => {
            try {
                const result = await request(`/items?id=eq.${itemId}`);

                if (!result.length) {
                    throw new Error("Listing not found.");
                }

                if (!cancelled) {
                    setItem(result[0]);
                }
            } catch (error) {
                if (!cancelled) {
                    toast.error(error.message || "Failed to load listing.");
                    navigate("/catalog");
                }
            }
        };

        loadItem();

        return () => {
            cancelled = true;
        };
    }, [itemId, navigate]);


    const deleteItemClickHandler = async () => {
        if (isDeleting) return;

        const confirmed = window.confirm(
            `Are you sure you want to delete "${item.title}"?`
        );

        if (!confirmed) return;

        setIsDeleting(true);

        try {
            await itemApi.remove(itemId);

            toast.success("Listing deleted successfully!");
            navigate("/catalog");
        } catch (error) {
            toast.error(error.message || "Failed to delete listing. Please try again.");
        } finally {
            setIsDeleting(false);
        }
    };


    return (

        <>
            <div className="untree_co-section">
                <div className="container">

                    <div className={styles["item-details-layout"]}>

                        <div className={styles["item-details-gallery"]}>
                            <img
                                src={item.images?.[0]}
                                alt={item.title}
                                className={styles["item-details-image"]}
                            />

                            <h2 className={styles["item-details-price"]}>
                                € {item.price}
                            </h2>
                        </div>

                        <div className={styles["item-details-content"]}>
                            <h2 className={styles["item-details-title"]}>{item.title}</h2>

                            <div className={styles["item-info-row"]}>
                                <strong>Category:</strong>
                                <span>{item.category}</span>
                            </div>

                            <div className={styles["item-info-row"]}>
                                <strong>Description:</strong>
                                <p>{item.description}</p>
                            </div>

                            <div className={styles["item-info-row"]}>
                                <strong>Listing Date:</strong>
                                <span>
                                    {new Date(item.added_on).toLocaleDateString("en-GB")}
                                </span>
                            </div>

                            <div className={styles["item-info-row"]}>
                                <strong>Listed by:</strong>
                                <span>Pesho</span>
                            </div>

                            <div className={styles["item-info-row"]}>
                                <strong>Status:</strong>
                                <span className={styles["text-capitalize"]}>
                                    {item.status}
                                </span>
                            </div>

                            <div className={styles["item-details-actions"]}>
                                {isOwner && (
                                    <>
                                        <Link to={`/items/${itemId}/edit`} className={styles["details-btn"] + " " + styles["edit-btn"]}>
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            className={styles["details-btn"] + " " + styles["delete-btn"]}
                                            onClick={deleteItemClickHandler}
                                            disabled={isDeleting}
                                        >
                                            {isDeleting ? "Deleting..." : "Delete"}
                                        </button>
                                    </>
                                )}
                            </div>

                            <CommentList
                                itemId={itemId}
                            />

                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}
