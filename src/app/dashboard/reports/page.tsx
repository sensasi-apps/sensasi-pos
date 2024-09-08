'use client'

import React, { useState } from 'react'
import { Card, CardBody } from '@nextui-org/card'
import { Select, SelectItem, Selection } from '@nextui-org/react'

import LineChart from '@/components/line-chart'

interface RangeDateProps {
  key: number | string
  value: number | string
  hari: number | string
}

const RangeDates: RangeDateProps[] = [
  /**
   * Value select item tidak bisa seperti ini: <SelectItem key={key}>{data} hari</SelectItem>
   *  */
  { key: 1, value: 1, hari: '1 hari' },
  { key: 3, value: 3, hari: '3 hari' },
  { key: 7, value: 7, hari: '7 hari' },
  { key: 14, value: 14, hari: '14 hari' },
  { key: 30, value: 30, hari: '30 hari' },
  { key: 60, value: 60, hari: '60 hari' },
  { key: 90, value: 90, hari: '90 hari' },
]

const ReportPage = () => {
  const [value, setValue] = useState<Selection>(new Set([7]))

  return (
    <div className="">
      <div className="my-6 pl-4">
        <h2 className="text-2xl font-semibold">Laporan</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="basis-8/12">
          <CardBody>
            <div className="flex flex-row justify-between items-center px-4">
              <h3 className="text-lg font-bold ">Total Penjualan</h3>
              <Select
                label="Pilih Rentang Waktu"
                className="max-w-44"
                size="sm"
                selectedKeys={value}
                onSelectionChange={setValue}
                // Default selected items still not working on fahmi's machine
                defaultSelectedKeys={[7]}
                isRequired>
                {RangeDates.map(range => (
                  <SelectItem key={range.key} value={range.key}>
                    {range.hari}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <LineChart day={Array.from(value).join('')} />
            <p className="text-small text-default-500">Selected: {value}</p>
          </CardBody>
        </Card>
        <Card className="basis-4/12">
          <CardBody>Test</CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ReportPage
