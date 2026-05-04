enum BANDS {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
};

export const colorCode = (band: string) => {
  return BANDS[band as keyof typeof BANDS];
}
export const COLORS = Object.keys(BANDS).filter(k => isNaN(Number(k)));
