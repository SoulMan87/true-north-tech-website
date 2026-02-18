import React from "react";
import logo from "@/assets/logo.png";

const CompassLogo = ({
  size = 55,
  showText = true,
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      
      {/* LOGO ORIGINAL */}
      <img
        src={logo}
        alt="True North Tech Logo"
        style={{ width: size, height: size }}
        className="object-contain pointer-events-none"
      />

      {/* TEXTO OPCIONAL */}
      {showText && (
        <div className="leading-none">
          <h1 className="font-extrabold text-xl tracking-tight text-white">
            TRUE NORTH
          </h1>

          <p className="text-sm font-semibold tracking-[0.3em] text-blue-400 uppercase">
            TECH
          </p>
        </div>
      )}
    </div>
  );
};

export default CompassLogo;
