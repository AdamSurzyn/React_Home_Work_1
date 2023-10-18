import React from "react";

const Info = ({
  sex,
  surname,
  balance,
}: {
  sex: string;
  surname: string;
  balance: number;
}) => {
  return (
    <div className="container">
      <div>{sex}</div>
      <div>{surname}</div>
      <div>{balance}</div>
    </div>
  );
};

export default Info;
