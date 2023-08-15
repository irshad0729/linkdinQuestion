import React from "react";
export default function R() {
  const [expand, setExpand] = React.useState(
    () => localStorage.getItem("key") === "1"
  );
  return (
    <div>
      <h1>{expand}</h1>
      <h1>HYdration Erro</h1>
    </div>
  );
}
