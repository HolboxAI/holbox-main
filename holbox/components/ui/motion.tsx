"use client";

import React, { forwardRef } from "react";

// Create a simple motion component using CSS transitions
// This is a simple alternative to framer-motion which would be better in a production environment

type MotionProps = {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
};

const getCssValue = (value: any): string => {
  if (typeof value === "number") {
    // Apply appropriate units
    if (["x", "y", "translateX", "translateY", "left", "right", "top", "bottom", "margin", "padding"].some(prop => 
      Object.keys(value).includes(prop)
    )) {
      return `${value}px`;
    }
    return `${value}`;
  }
  return value;
};

export const motion = {
  div: forwardRef<HTMLDivElement, MotionProps>(
    ({ initial, animate, transition, children, className, style, ...props }, ref) => {
      const [isAnimated, setIsAnimated] = React.useState(false);
      const initialStyle = React.useMemo(() => {
        const styleObject: React.CSSProperties = {};
        
        if (initial) {
          Object.entries(initial).forEach(([key, value]) => {
            if (key === "opacity") styleObject.opacity = value as number;
            else if (key === "scale") styleObject.transform = `scale(${value})`;
            else if (key === "x") styleObject.transform = `translateX(${getCssValue(value)})`;
            else if (key === "y") styleObject.transform = `translateY(${getCssValue(value)})`;
          });
        }
        
        return styleObject;
      }, [initial]);
      
      const animateStyle = React.useMemo(() => {
        const styleObject: React.CSSProperties = {};
        
        if (animate) {
          Object.entries(animate).forEach(([key, value]) => {
            if (key === "opacity") styleObject.opacity = value as number;
            else if (key === "scale") styleObject.transform = `scale(${value})`;
            else if (key === "x") styleObject.transform = `translateX(${getCssValue(value)})`;
            else if (key === "y") styleObject.transform = `translateY(${getCssValue(value)})`;
          });
        }
        
        return styleObject;
      }, [animate]);
      
      const transitionStyle = React.useMemo(() => {
        const styleObject: React.CSSProperties = {
          transition: "all 0.3s ease"
        };
        
        if (transition) {
          const { duration, delay, ease } = transition;
          styleObject.transition = `all ${duration || 0.3}s ${ease || "ease"} ${delay ? delay + "s" : ""}`;
        }
        
        return styleObject;
      }, [transition]);
      
      React.useEffect(() => {
        const timer = setTimeout(() => {
          setIsAnimated(true);
        }, 10);
        
        return () => clearTimeout(timer);
      }, []);
      
      return (
        <div
          ref={ref}
          className={className}
          style={{
            ...style,
            ...(isAnimated ? { ...animateStyle, ...transitionStyle } : initialStyle),
            transition: transitionStyle.transition
          }}
          {...props}
        >
          {children}
        </div>
      );
    }
  ),
};