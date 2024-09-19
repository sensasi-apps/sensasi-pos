import { dataPenjualan } from '@/data/penjualan'
import { useTheme } from 'next-themes'
import React from 'react'
import {
  ResponsiveContainer,
  BarChart as Chart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
  Label,
} from 'recharts'

interface BarChartProps {
  total?: number | string
}

const BarChart = ({ total }: BarChartProps) => {
  const { resolvedTheme } = useTheme()

  return (
    <ResponsiveContainer className={''} width="100%" height={300}>
      <Chart
        className="bg-transparent dark:text-black"
        margin={{ top: 15, right: 20, bottom: 20, left: 15 }}
        // TODO: Hapus data dummy ini ketika sudah terhubung dengan API
        data={dataPenjualan.slice(
          0,
          typeof total === 'number' ? total : Number(total),
        )}>
        <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis stroke={resolvedTheme === 'dark' ? '#eee' : '#111'}>
          <Label
            value="Total transkasi"
            angle={-90}
            position={'insideBottomLeft'}
            offset={0}
          />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar
          dataKey="kopi"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="roti"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </Chart>
    </ResponsiveContainer>
  )
}

export default BarChart
