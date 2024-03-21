import { Helmet } from "react-helmet-async";

export function Orders() {
    return (
       <>
            <Helmet title="Pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3x1 font-bold tracking-tighter"></h1>
            </div>
            <div className="space-y-2.5">
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros:</span>
                    <input placeholder='Nome do cliente' className="h-8 w-[320px]"/>
                </form>
            </div>
       </>
    )
}