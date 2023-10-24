import { table } from "console";
import { type } from "os";
import React, { ReactNode, ReactNodeArray } from "react";
//! Chcialem najpierw zrobic to rekursywnie, ale ciezko w typescripcie. Pozniej chcialem rekursywnie splaszczyc objekt i dawac kazdemu elementowi opcje "show", ale w typescript rekursja zajmuje mi za duzo czasu do rozgryzienia. Ostatecznie pewnie najbardziej czytelnie by bylo wszystko hardcodowac...
type Data = {
  //[key: string]: string | number | object | boolean;
  tableData: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
  showAll: boolean;
};

const Table = ({ tableData, showAll }: Data) => {
  const adress = tableData.address;
  const geo = tableData.address.geo;
  const company = tableData.company;
  const optional = ["address", "geo", "company", "website"];
  return (
    <div key={"myDiv"} className="table-container">
      <table key={"table"} className="table-data">
        <tbody key={"body"}>
          <tr key={"firstRow"} className="header">
            {Object.keys(tableData).map((objKey) => {
              if (showAll) {
                if (objKey === "address") {
                  return Object.keys(tableData.address).map((adressKey) => {
                    if (adressKey === "geo") {
                      return Object.keys(tableData.address.geo).map(
                        (geoKey) => {
                          console.log(geoKey);
                          return <th key={geoKey}>{geoKey}</th>;
                        }
                      );
                    } else {
                      return <th key={adressKey}>{adressKey}</th>;
                    }
                  });
                } else if (objKey === "company") {
                  return Object.keys(tableData.company).map((companyKey) => {
                    console.log(companyKey);
                    return <th key={companyKey}>{companyKey}</th>;
                  });
                } else {
                  return <th key={objKey}>{objKey}</th>;
                }
              } else if (!showAll && !optional.includes(objKey)) {
                return <th key={objKey}>{objKey}</th>;
              }
            })}
          </tr>
          <tr key={"secondRow"}>
            {Object.entries(tableData).map(([objKey, objValue]) => {
              if (showAll) {
                if (objKey === "address") {
                  return Object.entries(tableData.address).map(
                    ([adressKey, adressValue]) => {
                      if (adressKey === "geo") {
                        return Object.entries(tableData.address.geo).map(
                          ([geoKey, geoValue]) => {
                            console.log(geoKey);
                            return <th key={geoKey}>{geoValue}</th>;
                          }
                        );
                      } else {
                        return (
                          <th key={adressKey}>{adressValue.toString()}</th>
                        );
                      }
                    }
                  );
                } else if (objKey === "company") {
                  return Object.entries(tableData.company).map(
                    ([companyKey, companyValue]) => {
                      console.log(companyKey);
                      return <th key={companyKey}>{companyValue}</th>;
                    }
                  );
                } else {
                  return <th key={objKey}>{objValue.toString()}</th>;
                }
              } else if (!showAll && !optional.includes(objKey)) {
                return <th key={objKey}>{objValue.toString()}</th>;
              }
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
/*            {Object.entries(tableData).map(([key, value]) => {
    if (showAll && typeof value !== "object") {
        return <th key={key}>{value}</th>;
      } else if (showAll && typeof value === "object") {
        Object.entries(value).map(([innerKey, innerValue]) => {
          if (typeof innerValue !== "object") {
            return <th key={innerKey}>{innerValue}</th>;
          } else {
            Object.entries(innerValue).map(
              ([innerestKey, innerestValue]) => {
                return <th key={innerestKey}>{innerestValue}</th>;
              }
            );
          }
        });
      } else if (showAll && typeof value === "string") {
        return <th key={key}>{value}</th>;
      } else if (!showAll && typeof value === "string") {
        return <th key={key}>{value}</th>;
      }
    })}*/
export default Table;
