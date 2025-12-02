export const Card = ({ cardName }) => {
  return (
    <div
      style={{
        width: "466px",
        height: "72px",
        padding: "16px",
        gap: "8px",

        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        borderTop: "1px",
        borderLeft: "1px",
        borderRight: "1px",
        gap: "8px",
        position: "relative",
        bottom: "700px",
        left: "140px",
      }}
    >
      <div
        style={{
          color: "black",
          fontSize: "18px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {cardName}
      </div>
      <div
        style={{
          width: "128px",
          height: "40px",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0000001A",
        }}
      >
        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "9999px",
            borderColor: "#0000001A",
            backgroundColor: "white",
            backgroundImage: "url('/minus.png')",
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></button>
        <p
          style={{
            width: "48px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1
        </p>
        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "9999px",
            borderColor: "#0000001A",
            backgroundColor: "white",
            backgroundImage: "url('/plus.png')",
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
