export const PlayScore = () => {
  return (
    <div
      style={{
        padding: "0",
        margin: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <div
        style={{
          width: " 530px",
          height: "530px",
          padding: "32px",
          gap: "80px",
          border: "1px solid ",
          borderRadius: "24px",
          borderColor: "#0000001A",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            width: "426.53px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "700",
          }}
        >
          Play Score
          <img
            src="tsom.png"
            alt="tsom"
            style={{
              width: "31.47px",
              height: "28px",
            }}
          />
        </div>
        <p
          style={{
            color: "grey",
            fontSize: "16px",
            width: "466px",
            height: "19px",
          }}
        >
          Hidden in the middle of next
        </p>
      </div>
    </div>
  );
};
