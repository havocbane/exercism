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

export function decodedValue(resistorColors: string[]) {
  let value = "";
  resistorColors
    .slice(0, 2)
    .map(band => {
      value += BANDS[band as keyof typeof BANDS]
    });
  return parseInt(value);
}
