// import { getSearchResults } from "@/lib/search";
import { setTimeout } from "timers/promises";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await setTimeout(1000);

  return <div>...results</div>;
}
