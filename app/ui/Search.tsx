import Form from "next/form";

export function Search() {
  return (
    <Form action="/search">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <button type="submit">Submit</button>
    </Form>
  );
}
