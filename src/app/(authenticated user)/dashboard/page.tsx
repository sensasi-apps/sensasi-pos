'use client'

import React, { useState } from 'react'
import { Card, CardBody } from '@nextui-org/card'
import { Select, SelectItem } from '@nextui-org/react'

import LineChart from '@/components/line-chart'
import BarChart from '@/components/bar-chart'

const nDayses = [1, 3, 7, 14, 30, 60, 90]

const ReportPage = () => {
  const [value, setValue] = useState(7)

  return (
    <div>
      <div className="my-6 pl-4">
        <h2 className="text-2xl font-semibold">Laporan</h2>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <Card className="basis-8/12">
          <CardBody>
            <div className="flex flex-row items-center justify-between px-4">
              <h3 className="text-lg font-bold">Total Penjualan</h3>

              <Select
                label="Rentang Waktu"
                className="max-w-44"
                size="sm"
                selectedKeys={[value.toString()]}
                defaultSelectedKeys={['7']}
                onSelectionChange={({ currentKey }) => {
                  setValue(Number(currentKey))
                }}
                isRequired>
                {nDayses.map(nDays => (
                  <SelectItem key={nDays} textValue={`${nDays} hari terakhir`}>
                    {nDays} hari terakhir
                  </SelectItem>
                ))}
              </Select>
            </div>

            <LineChart day={value} />

            <p className="text-small text-default-500">Selected: {value}</p>
          </CardBody>
        </Card>

        <Card className="basis-4/12">
          <CardBody>
            <div className="flex flex-row items-center justify-between px-4">
              <h3 className="text-lg font-bold">Jumlah Transaksi</h3>

              <Select
                label="Rentang Waktu"
                className="max-w-44"
                size="sm"
                selectedKeys={[value.toString()]}
                defaultSelectedKeys={['7']}
                onSelectionChange={({ currentKey }) => {
                  setValue(Number(currentKey))
                }}
                isRequired>
                {nDayses.map(nDays => (
                  <SelectItem key={nDays} textValue={`${nDays} hari terakhir`}>
                    {nDays} hari terakhir
                  </SelectItem>
                ))}
              </Select>
            </div>

            <BarChart total={value} />

            <p className="text-small text-default-500">Selected: {value}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ReportPage
