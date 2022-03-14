import "./index.css";

export default function ThemeButton({ isDarkTheme, setIsDarkTheme }) {
  const handleTheme = () => {
    if (!isDarkTheme) {
      document.body.classList.toggle("darkMode");
      setIsDarkTheme(true);
    } else {
      document.body.classList.remove("darkMode");
      setIsDarkTheme(false);
    }
  };

  return (
    <section onClick={handleTheme} className="iconSection">
      {isDarkTheme ? (
        <i className="fa-solid fa-sun fa-3x"></i>
      ) : (
        <i className="fa-solid fa-moon fa-3x"></i>
      )}
    </section>
  );
}
