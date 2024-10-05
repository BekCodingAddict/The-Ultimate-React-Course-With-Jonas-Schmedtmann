import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "px-4 py-3 text-sm md:px-6 md:py-3.5 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-yellow-300 focus:ring focus:ring-stone-200 focus:ring-offset-1 disabled:cursor-not-allowed ",
    round: base + "px-2.5 py-1  md:px-3.5 md:py-2 text-sm",
  };

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

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
