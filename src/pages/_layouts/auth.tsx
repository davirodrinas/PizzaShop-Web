import { Outlet } from "react-router-dom"
import { Pizza } from 'lucide-react'

export function AuthLayout() {
    return(
        <div className="min-h-screen grid grid-cols-2 antialiased" >
            <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col junstify-between"> </div>
            <div className="flex intems-center gap-3 text-lg font-medium text-foreground">
                <Pizza className="h-5 w5"/>
                <span className="font-semibold">pizza.shop</span>
            </div>
            <footer className="text-sm">
                Painel do parceiro &copy; pizza.shop - {new Date().getUTCFullYear()}
            </footer>
            <div className="flex flex-col itens-center justify-center relative">
                <Outlet />
            </div>
        </div>
    )
}