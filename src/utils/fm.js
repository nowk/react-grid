/**
 * fm short for fix modifier returns the a modifier (or hyphen separated) as a
 * camelCase value for css modules
 *
 * @param {String} name
 * @return {String}
 * @api private
 */

let fm = (name) => {
  let split = name.split(/-+/);
  if (split.length === 1) {
    return name;
  }

  return split.map((v, i) => {
    if (i === 0)  {
      return v;
    }

    return v.charAt(0).toUpperCase() + v.slice(1);
  }).join('');
};

/**
 * full name alias
 */

let fixModifier = fm;

/**
 * expose
 */

export { fm };
export { fixModifier };
