export interface IDashboardLocal{
  arrows: {
      up: string,
      down: string,
      overview: string
  }
  data: {
      name: string[],
      svgElement: string[],
      money: number[]
  }
}
