"use client"

import { toast } from "sonner"
import SVGCopy from "../../assets/SVG/SVGCopy"
import { useRouter } from "next/navigation"
import { AccountDataTypes } from "@/app/types/account.types"

export default function CopyButton({ value, accountData, redirectURL }: { value: string, accountData: AccountDataTypes, redirectURL?: string }) {

  const router = useRouter()

  const handleCopy = (value: string) => {
    const toCopy = value === "CVU" ? accountData.cvu : accountData.alias
    navigator.clipboard.writeText(toCopy);
    toast.success(`${value} copiado`)
    if (redirectURL)
      router.push(redirectURL)
  }

  return (
    <div onClick={() => handleCopy(value)}>
      <SVGCopy className="text-primary size-8 sm:size-12 sm:absolute sm:right-0  xl:size-8" />
    </div>
  )
}
