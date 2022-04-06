export function test(): number {
  let someValue: string = '1000'
  return (someValue as any)
}