import { createPost } from "./actions";
import styles from "./Form.tsx.module.css";

export function Form() {
  return (
    <form action={createPost} className={styles.component}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button type="submit">Create</button>
    </form>
  );
}
