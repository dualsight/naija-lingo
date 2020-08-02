export default class Dialect {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly alternateName: string | null = null
  ) { }
}
