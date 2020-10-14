import React from 'react';
import { useSteps } from '@philpl/gatsby-theme-mdx-deck';

export function ZoomSteps({ children }) {
    return useZoomChildrenSteps(children);
}

function useZoomChildrenSteps(children) {
    const step = useSteps(React.Children.count(children) - 1);
    const normal = {
      transition: 'transform .5s ease',
      transform: 'scale(1)',
    };
    const zoomed = {
      transition: 'transform .5s ease',
      transform: 'scale(1.4)',
    };
    return React.Children.map(children, (child, index) => {
      const style = child.props ? child.props.style : {};
      return React.cloneElement(
        child,
        index === step
          ? { style: { ...style, ...zoomed }, key: index }
          : { style: { ...style, ...normal }, key: index }
      );
    });
  }