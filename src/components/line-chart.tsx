import { useTheme } from 'next-themes'
import React from 'react'
import {
  LineChart as Chart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from 'recharts'

// TODO: Hapus data dummy ini ketika sudah terhubung dengan API
import { dataPenjualan } from '@/data/penjualan'

interface LineChartProps {
  day?: number | string
}

const LineChart = ({ day }: LineChartProps) => {
  const { resolvedTheme } = useTheme()

  return (
    <ResponsiveContainer width="100%" height={300} className={''}>
      <Chart
        className="dark:text-black bg-transparent"
        // TODO: Hapus data dummy ini ketika sudah terhubung dengan API
        data={dataPenjualan.slice(
          0,
          typeof day === 'number' ? day : Number(day),
        )}
        margin={{ top: 15, right: 20, bottom: 20, left: 15 }}>
        <Line
          type="monotone"
          dataKey="kopi"
          stroke={resolvedTheme === 'dark' ? '#8884d8' : '#373387'}
          label={
            <CustomizedLabel x={0} y={0} stroke={'#000'} value={'Ini Label'} />
          }
        />

        <Line
          type="monotone"
          dataKey="gorengan"
          stroke={resolvedTheme === 'dark' ? '#82ca9d' : '#2ab85f'}
        />

        <Line
          type="monotone"
          dataKey="roti"
          stroke={resolvedTheme === 'dark' ? '#fa5555' : '#ff0000'}
        />

        <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />

        <XAxis
          dataKey="tanggal"
          stroke={resolvedTheme === 'dark' ? '#eee' : '#111'}>
          <Label value="Hari" offset={0} position="bottom" />
        </XAxis>

        <Legend verticalAlign="top" height={36} />

        <YAxis
          label={{
            value: 'Total Penjualan',
            angle: -90,
            position: 'insideLeft',
            offset: 0,
          }}
          stroke={resolvedTheme === 'dark' ? '#eee' : '#111'}
        />

        <Tooltip />
      </Chart>
    </ResponsiveContainer>
  )
}

export default LineChart

interface CustomizeLabelProps {
  x: number
  y: number
  stroke: string
  value: string | number
}

const CustomizedLabel = ({ x, y, stroke, value }: CustomizeLabelProps) => (
  <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
    {value}
  </text>
)
