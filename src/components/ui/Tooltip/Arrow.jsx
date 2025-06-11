import React from "react";
import classNames from "classnames";
import {
  BsFillCaretDownFill,
  BsFillCaretLeftFill,
  BsFillCaretUpFill,
  BsFillCaretRightFill,
} from "react-icons/bs";

const Arrow = ({ placement, color, colorDark }) => {
  // Remove the color classes from here
  const arrowBaseClass = `absolute`; // Now it's just the base styling

  const getArrow = () => {
    // Dynamically apply color classes directly where the icon is rendered
    const arrowClasses = classNames(
      arrowBaseClass,
      `text-${color}`, // Apply light mode color
      `dark:text-${colorDark}` // Apply dark mode color
    );

    switch (placement) {
      case "top":
        return (
          <BsFillCaretDownFill
            className={classNames(arrowClasses, "-bottom-2 w-full left-0")}
          />
        );
      case "top-start":
        return (
          <BsFillCaretDownFill
            className={classNames(arrowClasses, "-bottom-2 left-0 ml-3")}
          />
        );
      case "top-end":
        return (
          <BsFillCaretDownFill
            className={classNames(arrowClasses, "-bottom-2 right-0 mr-3")}
          />
        );
      case "right":
        return (
          <BsFillCaretLeftFill
            className={classNames(
              arrowClasses,
              "-left-2 top-1/2 transform -translate-y-1/2"
            )}
          />
        );
      case "right-start":
        return (
          <BsFillCaretLeftFill
            className={classNames(arrowClasses, "-left-2 top-2")}
          />
        );
      case "right-end":
        return (
          <BsFillCaretLeftFill
            className={classNames(arrowClasses, "-left-2 bottom-2")}
          />
        );
      case "bottom":
        return (
          <BsFillCaretUpFill
            className={classNames(arrowClasses, "-top-2 w-full left-0")}
          />
        );
      case "bottom-start":
        return (
          <BsFillCaretUpFill
            className={classNames(arrowClasses, "-top-2 left-0 ml-3")}
          />
        );
      case "bottom-end":
        return (
          <BsFillCaretUpFill
            className={classNames(arrowClasses, "-top-2 right-0 mr-3")}
          />
        );
      case "left":
        return (
          <BsFillCaretRightFill
            className={classNames(
              arrowClasses,
              "-right-2 top-1/2 transform -translate-y-1/2"
            )}
          />
        );
      case "left-start":
        return (
          <BsFillCaretRightFill
            className={classNames(arrowClasses, "-right-2 top-2")}
          />
        );
      case "left-end":
        return (
          <BsFillCaretRightFill
            className={classNames(arrowClasses, "-right-2 bottom-2")}
          />
        );
      default:
        return null; // Added a default return to handle cases where placement doesn't match
    }
  };

  return getArrow();
};

export default Arrow;
