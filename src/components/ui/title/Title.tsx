import React from "react";

interface Props {
  title: String;
  subtitle?: String;
  className?: String;
}

function Title({ title, subtitle, className }: Props) {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className="text-5xl font-semibold px-0 pt-12 sm:text-4xl lg:px-32 lg:pt-12 mb-3 text-center">
        {title}
      </h1>

      {subtitle && (
        <p className="text-center text-l sm:text-2xl font-thin mb-7">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Title;
