export function slideInFromTop(delay = 0.5, distance = -300) {
  return {
    initial: {
      y: distance,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 50,
      },
    },
  };
}
export function slideInFromRight(delay = 0.5, distance = 300) {
  return {
    initial: {
      x: distance,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 50,
      },
    },
  };
}
export function slideInFromLeft(delay = 0.5, distance = -300) {
  return {
    initial: {
      x: distance,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 50,
      },
    },
  };
}
export function slideInFromBottom(delay = 0.5, distance = 300) {
  return {
    initial: {
      y: distance,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 50,
      },
    },
  };
}
