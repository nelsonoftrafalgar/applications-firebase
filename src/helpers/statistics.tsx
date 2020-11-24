import React from 'react'
import { globalStyles } from 'src/styles/styles'

export const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}: {
  [key: string]: number
}) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  const style = { fontFamily: `${globalStyles.basic_font_family}` }
  const percentValue = (percent * 100).toFixed(0)
  return (
    <text style={style} x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {+percentValue > 5 ? `${percentValue}%` : ''}
    </text>
  )
}

export const legendFormatter = (value: string) => {
  const style = {
    color: `${globalStyles.basic_font_color}`,
    fontFamily: `${globalStyles.basic_font_family}`,
    marginLeft: '7px'
  }
  return <span style={style}>{value}</span>
}
