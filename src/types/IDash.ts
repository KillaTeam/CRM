export interface IDash {
    id: number;
    name: string;
    statsDashBoard:[
      {
        stat_name: string,
        svgElement: string,
        money: number,
        color: string
      }
    ]
  }