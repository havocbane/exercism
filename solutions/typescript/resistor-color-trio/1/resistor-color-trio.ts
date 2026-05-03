enum Color {
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
}

function getSIPrefix(val: number, exp: number): string {
  if (val < 1e6 && val >= 1e3)
      return `${val / 1e3} kiloohms`;
  else if (val < 1e9 && val >= 1e6)
      return `${val / 1e6} megaohms`;
  else if (val >= 1e9)
      return `${val / 1e9} gigaohms`;
  else
      return `${val} ohms`;
}

export function decodedResistorValue(colors: string[]): string {
  let value = 0;
  let exp = 1;
  for (let i = 2; i >= 0; i--) {
    const color: Color = Color[colors[i] as string as keyof typeof Color];
    if (i === 2) {
      exp = color;
    } else {
      value += color * (10 ** Math.max(0, 2 - i - 1));
    }
  }
  value *= 10 ** exp;
  return getSIPrefix(value, exp);
}
