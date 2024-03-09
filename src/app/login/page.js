import LoginPanel from "@/src/components/LoginPanel/LoginPanel";

import styles from "./page.module.scss";

function Login() {
    return (
        <div className={styles.page}>
            <LoginPanel />
        </div>
    )
}

export default Login