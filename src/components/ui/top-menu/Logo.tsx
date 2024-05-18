"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

function Logo() {
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/sevenmates/logo_white.png");

  useEffect(() => {
    if (theme === "dark") {
      setLogoSrc("/sevenmates/logo_white.png");
    } else {
      setLogoSrc("/sevenmates/logo_black.png");
    }
  }, [theme]);

  // return <Image src={logoSrc} width={200} height={60} alt="sevenmates" />;
  return (
    <Image
      src={"/sevenmates/logo_white.png"}
      width={200}
      height={60}
      alt="sevenmates"
    />
  );
}

export default Logo;
