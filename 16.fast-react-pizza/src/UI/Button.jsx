import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "fucus:bg-yellow-300 inline-block rounded-full bg-yellow-400  py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "py-4 py-3 md:px-6 md:py-4",
    small: base + "py-2 md:px-5 md:py-2.5 px-4 text-xs",
    secondary:
      "fucus:bg-yellow-300 inline-block rounded-full border-2 border-stone-300  py-3 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-800 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 py-3 md:px-6 md:py-3.5",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
