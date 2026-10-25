import { ToastContainer } from "react-toastify";

export default function ToastNotification() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={3500}
            pauseOnHover={true}
            hideProgressBar={false}
            closeOnClick={true}
            draggable={true}
            theme="light"
        />
    );
}