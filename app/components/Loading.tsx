import SVGSpinner from "../assets/SVG/SVGSpinner";

export default function Loading() {
  return (
    <div className="dashboard-content-container backdrop-blur flex items-center justify-center h-full"><SVGSpinner className="size-20 text-primary" /></div>
  )
}
