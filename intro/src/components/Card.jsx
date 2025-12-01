export const Card = () => {
  return (
    <div
      style={{
        width: "336px",
        height: "72px",
        padding: "16px",
        gap: "8px",
        // backgroundColor: "aqua",
        display: "flex",
        justifyContent: "space-between",
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
        John Cena
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
