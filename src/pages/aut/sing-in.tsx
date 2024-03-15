import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"

import { toast } from 'sonner'

import { useForm } from 'react-hook-form'
import {z} from 'zod'

const singinForm = z.object({
    email: z.string().email(),
})

type SingInForm = z.infer<typeof singinForm>

export function SingIn() {
    const { register, handleSubmit, formState: {isSubmitting} } = useForm<SingInForm>()

    async function handleSingIn(data: SingInForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))

            toast.success('Enviamos um link de autenticação para seu email', {
                action: {
                    label: 'Reenviar',
                    onClick: () => handleSingIn(data),
                },
            })
        } catch {
            toast.error('Credenciais Inválidas')
        }


    }

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

                <form onSubmit={handleSubmit(handleSingIn)} className="flex flex-col space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Seu Email</Label>
                        <Input className="w-full" id="email" type="email" {...register('email')} />
                    </div>

                    <Button disabled={isSubmitting} type="submit">Acessar Painel</Button>
                </form>
            </div>
        </div>
        
      </>
    )
}