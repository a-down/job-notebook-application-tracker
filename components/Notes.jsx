


export default function Notes({ sharedStyle, notes }) {

  return (
    <div className={`${sharedStyle} col-span-5`}>
      <h6 className="text-lg font-regular mb-3">Notes</h6>

      <div className="w-full h-[132px] rounded-sm border border-gray-6 py-1 px-2 overflow-scroll notes-wrapper">
        <p className="text-xs leading-normal">
          {notes}
        </p>
      </div>
    </div>
  )
}