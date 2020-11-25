import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { IBarChartWidgetData } from 'src/models/statistiscs'
import React from 'react'
import { globalStyles } from 'src/styles/styles'

const {light_font_color, dark_bg} = globalStyles
const style = {background: `${dark_bg}`, color: `${light_font_color}`, border: 'none'}
const margin = {top: 5, right: 30, left: 10, bottom: 5}

interface IProps {
  data: IBarChartWidgetData[]
  parentWidth: number
  color: string
}

const BarChartComponent: React.FC<IProps> = ({data, color, parentWidth}) => {
  const WIDTH = parentWidth - margin.left - margin.right

  return (
    <BarChart
      width={WIDTH}
      height={300}
      data={data}
      margin={margin}
    >
      <CartesianGrid stroke={light_font_color} vertical={false} strokeDasharray='5' />
      <XAxis dataKey='name' stroke={light_font_color}/>
      <YAxis stroke={light_font_color}/>
      <Tooltip contentStyle={style} cursor={false}/>
      <Bar dataKey='value' fill={color} />
    </BarChart>
  )
}

export {BarChartComponent}
