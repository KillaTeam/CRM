// database
import earningSVG from '../../assets/svg/money-recive.svg'
import balanceSVG from '../../assets/svg/wallet-money.svg'
import salesSVG from '../../assets/svg/bag.svg'
import arrowUpSVG from '../../assets/svg/arrow-up.svg'
import arrowDownSVG from '../../assets/svg/arrow-down.svg'

const dashLocals = [
  {id: 1, name: 'Earnig', svgElement: earningSVG, money: 198000, procents: 37.8, up: arrowUpSVG, color: 'green', procents_color: 'procent_green'},
  {id: 2, name: 'Balance', svgElement: balanceSVG, money: 2400, procents: 2, down: arrowDownSVG, color: 'blue', procents_color: 'procent_red'},
  {id: 3, name: 'Total sales', svgElement: salesSVG, money: 89000, procents: 11, up: arrowUpSVG, color: 'red', procents_color: 'procent_green'}
]

export default dashLocals;