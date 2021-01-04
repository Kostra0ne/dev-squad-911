import React from "react";

/**
 *
 * Whenever this component is called in this manner
 * <Component></Component>
 * props.children will point to any thing inbetween the
 * opening and closing tag.
 * eg: <ComponentWithChildren>
 *      <h2>Hello i'm the child</h2>
 *      </ComponentWithChildren>
 *
 * props.children wil represent the markup inside.
 */

function ComponentWithChildren(props) {
  // console.log(props);

  return <div>{props.children}</div>;
}

export default ComponentWithChildren;
