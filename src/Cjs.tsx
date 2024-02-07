const { toast } = require("react-toastify");

export function Cjs() {
  const notify = () => toast("Wow so easy, cjs!");

  return <button onClick={notify}>Notify cjs!</button>;
}
