import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="fridal" />
      <h4>
        concesionaria Fridal tu mejor opcion en vehiculos, cotizanos y
        compruebalo!
      </h4>
      <SocialLink />
    </div>
  );
}
