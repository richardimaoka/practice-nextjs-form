import styles from "./page.module.css";
import { Form } from "./ui/Form.tsx";

export default function Page() {
  return (
    <div className={styles.component}>
      <Form />
    </div>
  );
}
