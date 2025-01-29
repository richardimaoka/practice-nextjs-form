import Form from "next/form";
import styles from "./Search.module.css";
import { SearchButton } from "./SearchButton";

export function Search() {
  function poppop() {
    console.log("pppo");
  }

  return (
    <Form action="search" className={styles.component}>
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <SearchButton />
    </Form>
  );
}
