import Form from "next/form";
import styles from "./Search.module.css";

export function Search() {
  return (
    <Form action="/search" className={styles.component}>
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <button type="submit">Submit</button>
    </Form>
  );
}
