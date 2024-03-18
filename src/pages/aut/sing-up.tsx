import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"

import { toast } from 'sonner'

import { useForm } from 'react-hook-form'
import {z} from 'zod'

const singUpForm = z.object({
    email: z.string().email(),
})

type SingUpForm = z.infer<typeof singUpForm>

export function SingUp() {
    const { register, handleSubmit, formState: {isSubmitting} } = useForm<SingUpForm>()

    async function handleSingUp(data: SingUpForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // toast.success('Enviamos um link de autenticação para seu email', {
            //     action: {
            //         label: 'Reenviar',
            //         onClick: () => handleSingUp(data),
            //     },
            // })
        } catch {
            toast.error('Credenciais Inválidas')
        }


    }

    return (
      <>
        <Helmet title="Cadastro"/>
        <div className="p-8">
            <div className="w-[350px] flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Criar conta gratis
                    </h1 >
                    <p className="text-sm text-muted-foreground">
                        Seja um parceiro e comece suas vendas!
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleSingUp)} className="flex flex-col space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Seu Email</Label>
                        <Input className="w-full" id="email" type="email" {...register('email')} />
                    </div>

                    <Button disabled={isSubmitting} type="submit">Finalizar cadastro</Button>
                </form>
            </div>
        </div>
        
      </>
    )
}