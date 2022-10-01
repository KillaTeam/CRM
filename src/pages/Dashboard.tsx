import React from "react";
import "../scss/Dashboard.scss";
import dashLocal from "../assets/dashLocal";
const user = 'Evan'
const names = Object.values(dashLocal.data.name);
const svg = Object.values(dashLocal.data.svgElement)

// const first = () =>{
//   for (let i = 0; i < 3; i++) {
//     let element = dashLocal.data.money[i];
//     let element2 = dashLocal.data.name[i];
//     let element3 = dashLocal.data.svgElement[i];
//     return <div>{element + element2 + element3}</div>
//   }
// }

// const NameList = dashLocal.data.name[i]
// const ListItems1 = NameList.map((NameList: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => 
//   <div>{NameList}</div>
// )

const ItemsList = dashLocal.data;
const  arrList = [];
for (let i = 0; i < ItemsList.name.length; i++) {
  const element = ItemsList.name[i];
  
}
const NameItems = ItemsList.name.map((NameItem: any) => 
  <div >{NameItem}</div>
);
const svgItems = ItemsList.svgElement.map((SvgItem: any) => 
  <div>{SvgItem}</div>
);
const moneyItems = ItemsList.money.map((MoneyItem: any) => 
  <div>{MoneyItem}</div>
);

const Main = () => {
  return (
    <div style={{ flex: "2" }}>
      <header>
        <h1>{`Hello 👋 ${user}`}</h1>
      </header>
      <main>
      <div className="stat-block">
      {NameItems}
      </div>
      </main>
    </div>
  );
};

export default Main;
