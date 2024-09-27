import React from 'react'

import TimeChart from '../components/TimeChart'
import Layout from '../components/Layout'
import Card from '../components/Card'

const RevenueChart = () => {
  return (
    <>
      <Layout>
      <div className="space-y-4">
        <Card>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        </Card>
      <Card>
      <TimeChart></TimeChart>
      </Card>
        </div>
      </Layout>
    </>
  )
}

export default RevenueChart