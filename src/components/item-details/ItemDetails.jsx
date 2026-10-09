import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import request from "../../utils/request";
import CommentList from "../comments/comment-list/CommentList";

import styles from "./ItemDetails.module.css";
import AuthContext from "../../contexts/auth-context";
import { itemApi } from "../../api";

export default function ItemDetails() {
    const { user, accessToken, isAuthenticated } = useContext(AuthContext);
    const { itemId } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({});

    const isOwner = user && user?.id === item?.owner_id;

    useEffect(() => {
        request(`/items?id=eq.${itemId}`)
            .then(result => {
                console.log(result[0]);
                setItem(result[0]);
            })
            .catch(err => alert(err));
    }, [itemId]);

    const deleteItemClickHandler = async (e) => {
        e.preventDefault();

        const confirmed = confirm(`Are you sure you want to delete ${item.title} item?`);

        if (!confirmed) {
            return;
        }

        console.log('Access token exists:', !!accessToken);

        try {
            await itemApi.remove(itemId, accessToken);

            navigate('/catalog');
        } catch (error) {
            alert(error.message);
        }
    }

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

                            <div className={styles["image-dots"]}>
                                <span className={styles["active"]}></span>
                                <span className={styles["image-dot"]}></span>
                                <span className={styles["image-dot"]}></span>
                                <span></span>
                            </div>

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
                                            className={styles["details-btn"] + " " + styles["delete-btn"]}
                                            onClick={deleteItemClickHandler}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}

                                {!isOwner && (
                                    <button className={styles["details-btn"] + " " + styles["like-btn"]}>
                                        ♡ &nbsp; 14 Likes
                                    </button>
                                )}
                            </div>

                            {isAuthenticated &&
                                <CommentList
                                    itemId={itemId}
                                    user={user}
                                />
                            }
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}
