import React from "react";

interface Props {
  title: String;
  subtitle?: String;
  className?: String;
}

function Title({ title, subtitle, className }: Props) {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className="antialiased text-4xl font-semibold my-10">{title}</h1>

      {subtitle && <h3 className="text-xl mb-5">{subtitle}</h3>}
    </div>
  );
}

export default Title;
