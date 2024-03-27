import { Helmet } from 'react-helmet-async'

import { Table, TableBody, TableHead, TableRow } from '@/components/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3x1 font-bold tracking-tighter"></h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="border rouded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180x]">Ralizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do Pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return <OrderTableRow key={i} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
