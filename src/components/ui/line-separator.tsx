import React from "react";
interface Props {
  height: string;
}
function LineSeparator({ height }: Props) {
  return (
    <div className="px-5">
      <div
        className={`w-full bg-[#121212] dark:bg-white h-${height} rounded-full`}
      ></div>
    </div>
  );
}

export default LineSeparator;
