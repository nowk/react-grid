const classnames = (props, arr) => {
  arr = arr || [];

  let { className } = props;

  if (!className) {
    return arr.join(' ');
  }

  if (!(className instanceof Array)) {
    className = [className];
  }

  className.forEach((v) => {
    arr.push(v);
  });

  return arr.join(' ');
}

export { classnames }
