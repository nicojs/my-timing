export default async function Static() {
  "use cache";
  return <p>{new Date().toLocaleTimeString()}</p>;
}
