export const Students = ({ boxname, age, gender }) => {
  return (
    <div>
      <div>Student name : {boxname} </div>
      <div>Student age : {age} </div>
      <div
        style={{
          backgroundColor:
            gender === "male" ? "aqua" : gender === "female" ? "pink" : "red",
        }}
      >
        Student gender : {gender}
      </div>
    </div>
  );
};
