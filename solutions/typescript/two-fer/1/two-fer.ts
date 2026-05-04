export function twoFer(name: string|null = null): string {
  if (!name) return 'One for you, one for me.';
  return `One for ${name}, one for me.`;
}
