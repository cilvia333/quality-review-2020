const rgb2hsv = (rgb: [number, number, number]) => {
  const r: number = rgb[0] / 255;
  const g: number = rgb[1] / 255;
  const b: number = rgb[2] / 255;

  const max: number = Math.max(r, g, b);
  const min: number = Math.min(r, g, b);
  const diff: number = max - min;

  let h = 0;

  switch (min) {
    case max:
      h = 0;
      break;

    case r:
      h = 60 * ((b - g) / diff) + 180;
      break;

    case g:
      h = 60 * ((r - b) / diff) + 300;
      break;

    case b:
      h = 60 * ((g - r) / diff) + 60;
      break;
  }

  const s: number = (max === 0 ? 0 : diff / max) * 100;
  const v: number = max * 100;

  return [h, s, v] as [number, number, number];
};

export { rgb2hsv };
