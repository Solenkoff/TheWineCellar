import styles from "./ItemDetails.module.css";

export default function ItemDetails() {
    // Temporary data until we connect the Details API
    const item = {
        title: "Modern Grey Armchair",
        category: "Sofas",
        description: "A comfortable and stylish armchair in great condition. Perfect for a living room, bedroom or reading corner.",
        images: ["/images/sofa-01.jpg"],
        price: 135,
        created_at: "2025-10-27",
        owner_name: "JohnDoe",
        status: "available",
        likes_count: 12,
    };

    // Temporary values for testing the layout
    const isOwner = false;
    const isAdmin = false;
    const isLoggedIn = true;

    // const canManage = isOwner || isAdmin;
    const canManage = true; // Temporary value for testing the layout
    const canLike = isLoggedIn && !canManage;

    return (

        <>
            <div className="untree_co-section">
                <div className="container">

                    <div className={styles["item-details-layout"]}>

                        <div className={styles["item-details-gallery"]}>
                            <img
                                src={item.images[0]}
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
                                    {new Date(item.created_at).toLocaleDateString("en-GB")}
                                </span>
                            </div>

                            <div className={styles["item-info-row"]}>
                                <strong>Listed by:</strong>
                                <span>{item.owner_name}</span>
                            </div>

                            <div className={styles["item-info-row"]}>
                                <strong>Status:</strong>
                                <span className={styles["text-capitalize"]}>
                                    {item.status}
                                </span>
                            </div>

                            <div className={styles["item-details-actions"]}>
                                {canManage && (
                                    <>
                                        <button className={styles["details-btn"] + " " + styles["edit-btn"]}>
                                            Edit
                                        </button>
                                        <button className={styles["details-btn"] + " " + styles["delete-btn"]}>
                                            Delete
                                        </button>
                                    </>
                                )}

                                {canLike && (
                                    <button className={styles["details-btn"] + " " + styles["like-btn"]}>
                                        ♡ &nbsp; {item.likes_count} Likes
                                    </button>
                                )}
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

        </>
    );
}
