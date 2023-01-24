import React from "react";

export default function Table({ dates, filteredLocations }) {
  return (
    <table
      className={
        "min-w-full overflow-hidden rounded-lg divide-y divide-gray-300"
      }
    >
      <thead className="bg-brand-purple">
        <tr>
          <th
            scope="col"
            className="px-3 py-4 text-left text-sm font-semibold text-white"
          >
            Region Name
          </th>
          {dates.map((date) => (
            <th
              key={date}
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-white"
            >
              {new Date(date).toLocaleDateString()}
            </th>
          ))}
          <th
            scope="col"
            className="py-4 text-left text-sm font-semibold text-white"
          >
            Summary
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {filteredLocations.map((location) => (
          <tr key={location.regionName}>
            <td className={"px-3 py-3.5 pl-4 text-brand-purple font-semibold"}>
              {location.regionName}
            </td>
            {location.data.map((data, i) => (
              <td
                className={"px-3 py-6 text-brand-blue"}
                key={`${location.regionName}-${dates[i]}`}
              >
                {data}
              </td>
            ))}
            <td
              className={"py-4 text-brand-blue"}
              key={`summary-${location.regionName}`}
            >
              <p className={"pb-4 lg:pb-1"}>
                Total Rainfall{" "}
                <span className={"font-semibold"}>{location.total}mm</span>
              </p>
              <p className={"pb-4 lg:pb-1"}>
                Rainfall over 10m{" "}
                <span className={"font-semibold"}>{location.daysOver10}</span>
              </p>
              <p className={"pb-4 lg:pb-1"}>
                Average Rainfall{" "}
                <span className={"font-semibold"}>
                  {Math.floor(location.total / location.data.length).toFixed(2)}
                  mm
                </span>
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
