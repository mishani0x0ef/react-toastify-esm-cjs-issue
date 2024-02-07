import { toast } from "react-toastify";

export function Esm() {
  const notify = () => toast("esm!");

  return <button onClick={notify}>Notify esm!</button>;
}
