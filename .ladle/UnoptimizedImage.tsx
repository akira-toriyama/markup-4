import React from "react";
// @ts-expect-error
import OriginalImage from "next/original-image";

const UnoptimizedImage = (props: any) => (
  <OriginalImage {...props} unoptimized />
);

/**
 * https://github.com/tajo/ladle/issues/100#issuecomment-1397392635
 */
export default UnoptimizedImage;
