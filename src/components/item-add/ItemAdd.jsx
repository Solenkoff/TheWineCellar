import styles from './ItemAdd.module.css';

export default function ItemAdd() {
    return (

        <div className={styles["page-background"]}>

            <div className={styles["modal-overlay"]} id="modalOverlay">
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
                        >
                            ×
                        </button>
                    </div>

                    <form >
                        <div className={styles["form-fields"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="title">Listing title *</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="e.g. Vintage wooden coffee table"
                                    required
                                />
                            </div>

                            <div className={styles["form-group"]}>
                                <label htmlFor="category">Category *</label>
                                <select id="category" name="category" required defaultValue="">
                                    <option value="" disabled>
                                        Select a category
                                    </option>
                                    <option>Living Room</option>
                                    <option>Bedroom</option>
                                    <option>Bathroom</option>
                                    <option>Dining</option>
                                    <option>Office</option>
                                    <option>Café &amp; Bar</option>
                                    <option>Baby &amp; Children</option>
                                    <option>Garden &amp; Outdoor</option>
                                    <option>TV &amp; Media</option>
                                    <option>Storage units &amp; cabinets</option>
                                    <option>Bookcases &amp; shelving units</option>
                                    <option>Decoration</option>
                                    <option>Lighting</option>
                                    <option>Other</option>
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
                                />
                            </div>

                            <div className={styles["form-group"]}>
                                <label htmlFor="image">Image URL *</label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    placeholder="https://example.com/furniture.jpg"
                                    required
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
                                    defaultValue=""
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