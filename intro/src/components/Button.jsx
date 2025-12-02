export const Button = ({ button }) => {
  return (
    <button
      style={{
        width: "120px",
        height: "56px",
        backgroundColor: "#14B166",
        border: "none",
        color: "white",
        borderRadius: "8px",
        fontSize: "18px",
        position: "absolute",
        bottom: "300px",
        left: "490px",
      }}
    >
      {button}
    </button>
  );
};
