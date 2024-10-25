"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked area chart"

const chartData = [
  { month: "Janeiro", ganhos: 8421, gastos: 2341 },
  { month: "Fevereiro", ganhos: 9421, gastos: 5341 },
  { month: "Março", ganhos: 6421, gastos: 2441 },
  { month: "Abril", ganhos: 7431, gastos: 3241 },
  { month: "Maio", ganhos: 7871, gastos: 2491 },
  { month: "Junho", ganhos: 7994, gastos: 2752 },
]

const chartConfig = {
  ganhos: {
    label: "Receita",
    color: "#00B677",
  },
  gastos: {
    label: "Gastos",
    color: "#B63377",
  },
} satisfies ChartConfig

export function ChartComponent() {
  return (
    <Card className="w-full border-none p-0 m-0">
      <CardHeader className="p-0 m-0">
        <CardDescription className="p-0 m-0">
          Mostrando receita nos últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 2,
              right: 2,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ stroke: "#ffffff" }}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="gastos"
              type="natural"
              fill="#B63377"
              fillOpacity={0.4}
              stroke="#D86699"
              stackId="a"
            />
            <Area
              dataKey="ganhos"
              type="natural"
              fill="#00B677"
              fillOpacity={0.4}
              stroke="#66D899"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Aumento de 5.4% em Julho <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
