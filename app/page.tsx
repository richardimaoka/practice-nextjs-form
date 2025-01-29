import styles from "./page.module.css";
import { Search } from "./ui/Search";

export default function Page() {
  return (
    <div className={styles.component}>
      <Search />
    </div>
  );
}
