import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import styles from './ItemAdd.module.css';
import request from '../../utils/request';

const initialValues = {
    title: "",
    category: "",
    price: "",
    description: "",
    images: [],
}

export default function ItemAdd() {
    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();
    const { itemId } = useParams();

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setValues(state => ({
            ...state,
            [name]: name === "images" ? [value] : value
        }));
    };

    const submitAction = async () => {
        try {
            await request("/items", "POST", {
                ...values,
                price: Number(values.price)
            });

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const cancelHandler = () => {
         navigate('/catalog');
    };

    return (

        <div className={styles["page-background"]}>

            <div className={styles["modal-overlay"]} >
                <div
                    className={styles["listing-modal"]}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modalTitle"
                >
                    <div className={styles["modal-header"]}>
                        <div>
                            <h2 id="modalTitle">Add New Listing</h2>
                            <p>Help your furniture find its next home.</p>
                        </div>
                        <button
                            type="button"
                            className={styles["close-button"]}
                            aria-label="Close"
                            onClick={cancelHandler}
                        >
                            ×
                        </button>
                    </div>

                    <form action={submitAction}>
                        <div className={styles["form-fields"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="title">Listing title *</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="e.g. Vintage wooden coffee table"
                                    required
                                    value={values.title}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className={styles["form-group"]}>
                                <label htmlFor="category">Category *</label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    value={values.category}
                                    onChange={changeHandler}
                                >
                                    <option value="" disabled>
                                        Select a category
                                    </option>
                                    <option value="living-room">Living Room</option>
                                    <option value="bedroom">Bedroom</option>
                                    <option value="bathroom">Bathroom</option>
                                    <option value="dining">Dining</option>
                                    <option value="office">Office</option>
                                    <option value="cafe-bar">Café &amp; Bar</option>
                                    <option value="baby-children">Baby &amp; Children</option>
                                    <option value="garden-outdoor">Garden &amp; Outdoor</option>
                                    <option value="tv-media">TV &amp; Media</option>
                                    <option value="storage-cabinets">Storage units &amp; cabinets</option>
                                    <option value="bookcases-shelves">Bookcases &amp; shelving units</option>
                                    <option value="decoration">Decoration</option>
                                    <option value="lighting">Lighting</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles["form-group"]}>
                                <label htmlFor="price">Price (€) *</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    min={0}
                                    step="0.01"
                                    placeholder="e.g. 25"
                                    required
                                    value={values.price}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className={styles["form-group"]}>
                                <label htmlFor="image">Image URL *</label>
                                <input
                                    type="url"
                                    id="image"
                                    name="images"
                                    placeholder="https://example.com/furniture.jpg"
                                    required
                                    value={values.images[0] || ""}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className={`${styles["form-group"]} ${styles["full-width"]}`}>
                                <label htmlFor="description">Description *</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    placeholder="Describe the item, its condition, dimensions, and anything a rescuer should know..."
                                    required
                                    value={values.description}
                                    onChange={changeHandler}
                                />
                                <small>
                                    A little detail helps someone decide whether it's the right fit.
                                </small>
                            </div>
                        </div>

                        <div className={styles["form-buttons"]}>
                            <button
                                type="button"
                                className={styles["cancel-button"]}
                                onClick={cancelHandler}
                            >
                                Cancel
                            </button>
                            <button type="submit" className={styles["add-button"]}>
                                Add Listing
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
}