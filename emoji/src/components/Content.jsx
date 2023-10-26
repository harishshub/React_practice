import React from "react";

function Content(info) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img">
          {info.emoji}
        </span>
        <span>{info.title}</span>
      </dt>
      <dd>
        <span>{info.means}</span>
      </dd>
    </div>
  );
}

export default Content;
