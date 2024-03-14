import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"


export function SingIn() {
    return (
      <>
        <Helmet title="Login"/>
        <div className="p-8">
            <div className="w-[350px] flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Acessar Painel
                    </h1 >
                    <p className="text-sm text-muted-foreground">Acompanhe susa vendas pelo painel do parceiro!</p>
                </div>

                <form className="flex flex-col space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Seu Email</Label>
                        <Input className="w-full" id="email" type="email" />
                    </div>

                    <Button type="submit">Acessar Painel</Button>
                </form>
            </div>
        </div>
        
      </>
    )
}