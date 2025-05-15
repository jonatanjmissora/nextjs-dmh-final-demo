"use client"

import SVGCheckbox from "@/app/assets/SVG/SVGCheckbox";
import SVGCheckboxFill from "@/app/assets/SVG/SVGCheckboxFill";
import SVGChevronDown from "@/app/assets/SVG/SVGChevronDown";
import SVGChevronRight from "@/app/assets/SVG/SVGChevronRight";
import SVGFilter from "@/app/assets/SVG/SVGFilter";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const filterOptions = [
  { id: 0, name: "Hoy", filter: "hoy" },
  { id: 1, name: "Ayer", filter: "ayer" },
  { id: 2, name: "Última semana", filter: "semana" },
  { id: 3, name: "Últimos 15 días", filter: "quincena" },
  { id: 4, name: "Último mes", filter: "mes" },
  { id: 5, name: "Último año", filter: "anio" },
]

const filterUrl = (actualOption: number) => {
  if (actualOption === -1) return ""
  const actualFilterOption = filterOptions[actualOption]
  return actualFilterOption.filter
}

export default function ActivityFilter() {

  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const search = searchParams.get("search") ?? ""
  const detailRef = useRef<HTMLDetailsElement>(null)
  const [actualOption, setActualOption] = useState<number>(-1)

  useEffect(() => {
    const filter = searchParams.get("filter") ?? ""
    if (filter !== "") {
      const filterOption = filterOptions.filter(fo => fo.filter === filter)[0]
      setActualOption(filterOption.id)
    }
  }, [searchParams])

  useEffect(() => {
    if (search !== "")
      setActualOption(-1)
  }, [search])

  const changeFilter = (filter: string) => {
    if (detailRef.current !== null) detailRef.current.removeAttribute("open")

    const params = new URLSearchParams(searchParams);

    if (filter !== "") {
      params.set('filter', filter);
      params.set("page", "1")
    } else {
      params.delete('filter');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <details
      ref={detailRef}
      className='relative p4'
    >
      <summary className='list-none flex justify-between items-center gap-6'>
        <span className="text-2xl font-medium link-border sm:after:w-0 sm:text-3xl xl:text-xl">Filtrar</span>
        <SVGFilter className={"text-primary"} />
      </summary>

      <div className="bg-white absolute z-10 top-[200%] -right-[20%] sm:-right-[50%] sm:top-[230%] card-shadow w-[350%] xl:w-[300%] xl:-right-[40%]">
        <div className="flex justify-between items-center gap-20 border-b border-black p-6 px-10 xl:p-5 xl:px-8 xl:gap-10">
          <div className="flex items-center gap-3">
            <span className="text-xl font-medium tracking-wider xl:text-base">Período</span>
            <SVGChevronDown />
          </div>
          <button onClick={() => setActualOption(-1)} className="text-xl tracking-wider text-gray-600 xl:text-base">Borrar filtros</button>
        </div>

        {filterOptions.map((filterOption, index) =>
          <FilterOptionRow
            key={index}
            row={filterOption}
            actualOption={actualOption}
            setActualOption={setActualOption}
          />
        )}

        <div className="p-4 px-10 text-xl text-gray-600 flex justify-between items-center xl:text-base xl:p-1 xl:px-8">
          <span>Otro período</span>
          <SVGChevronRight className="size-5 opacity-100 xl:size-3" />
        </div>

        <div className="w-full my-8 flex justify-center xl:my-4">

          <button
            onClick={() => changeFilter(filterUrl(actualOption))}
            className="button-form card-shadow p-2 w-10/12 h-16 sm:h-20 xl:h-12 xl:text-base"
          >
            Aplicar
          </button>

        </div>

      </div>

    </details>
  )
}

const FilterOptionRow = ({ row, actualOption, setActualOption }:
  { row: { id: number, name: string, filter: string }, actualOption: number, setActualOption: React.Dispatch<React.SetStateAction<number>> }) => {

  return (
    <button
      className={`w-full p-4 px-10 text-xl text-gray-600 flex justify-between items-center ${actualOption === row.id && "font-bold"} xl:p-1 xl:px-8 xl:text-base`}
      onClick={() => setActualOption(row.id)}
    >
      <span>{row.name}</span>
      {actualOption === row.id
        ? <SVGCheckboxFill className="size-6 text-primary xl:size-3" />
        : <SVGCheckbox className="size-6 xl:size-3" />
      }
    </button>
  )
}