import "./componentsFont.module.css";

const ComponentsFont = ({ children }) => {
  return (
    <div
      style={{
        height: "auto",
        fontFamily:
          "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
};

export default ComponentsFont;
