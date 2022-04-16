import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          //   color: match ? "white" : "darkcyan",
          // borderBottom: match ? "2px solid white" : "0",
          // color: match ? "white" : "#b5b5b5",
          color: match ? "red" : "white",
          textDecoration: "none",
          marginLeft: "12px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
