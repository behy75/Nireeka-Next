export default function AccessoriesTable({
  bikeIndx,
  model,
  price,
  details,
  manufactureDate,
  lastItem,
  selectedBg,
  percent,
  stage,
  colorAndSize,
  frameNumber,
  bikeColor,
  isRefaunded,
  refundedAt,
}) {
  return (
    <div className="w-full bg-white rounded-3xl my-2 shadow-sm border border-gray-200">
      <div className="font-semibold font-inter text-lg pt-5 ml-6">#{model}</div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 md:mx-0 lg:-mx-8">
          <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden flex justify-center items-center">
              <table className="w-900 mb-3">
                <tbody>
                  <tr className="flex justify-between">
                    <td className="px-6 py-4 font-normal font-inter text-xs lg:text-sm whitespace-nowrap md:w-40 lg:w-52 text-white text-start">
                      <span
                        style={{ backgroundColor: `${bikeColor}` }}
                        className="font-inter px-4 py-1 rounded-xl"
                      >
                        {colorAndSize}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-light font-inter text-xs lg:text-sm text-gray-500 text-center">
                      {frameNumber
                        ? `Frame Number: #${frameNumber}`
                        : "Frame Number: N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-normal font-inter text-xs lg:text-sm text-gray-800 text-center">
                      ${price} USD
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap font-light font-inter text-xs lg:text-sm text-gray-500 text-right">
                      {manufactureDate !== "null" ? manufactureDate : "date"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
