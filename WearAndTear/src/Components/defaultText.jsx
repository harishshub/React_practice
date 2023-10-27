import React from "react";

export function Save() {
  return <div className="savediv">Save extra with combo offers</div>;
}

export function Top() {
  return <div className="toptext">Top Discount of the Sale</div>;
}

export function Best() {
  return <div className="bestseller">Bestseller</div>;
}

export function Hover() {
  return (
    <div className="hover-div">
      <input type="checkbox" id="Compare" name="Compare" value="Compare" />
      <label className="checktext">Add to Compare</label>
    </div>
  );
}


