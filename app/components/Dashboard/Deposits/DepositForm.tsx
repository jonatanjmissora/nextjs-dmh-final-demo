"use client"

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';
import { DepositTypes } from '@/app/types/deposit.types';
import { postDeposit } from '@/app/services/deposit.services';
import { SubmitForm } from '../../Button/SubmitForm';

export default function DepositForm({ deposit, accountId, token }: { deposit: DepositTypes, accountId: string, token: string }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const newDeposit = {
                "amount": deposit.amount,
                "dated": new Date(),
                "destination": deposit.destination,
                "origin": deposit.origin,
            }
            //console.log(newDeposit)
            // const newDepositResp = await postDeposit(accountId, newDeposit, token)
            // if (newDepositResp.error) {
            //     throw new Error(newDepositResp.error)
            // }
            //console.log("Nuevo depósito creado", newDepositResp)
            const newDepositResp = { data: { id: 1 } }
            toast.success("Deposito realizado")
            router.push(`/dashboard/accounts/${accountId}/deposits/success?id=${newDepositResp.data.id}`)
            router.refresh();
        } catch (error: any) {
            toast.error(error.message)
        }
        finally {
            setIsLoading(false)
        }

    }

    return (
        <form onSubmit={handleSubmit} className='w-1/2 absolute top-[105%] right-0 card sm:static sm:w-full xl:absolute xl:top-[75%] xl:right-9'>
            <SubmitForm className='text-black xl:w-1/3 xl:ml-auto' isLoading={isLoading} text={'Transferir'} />
        </form>
    )
}