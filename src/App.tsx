import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
function App() {
  const dataCard = [
    {
      name: "Ingreso del mes",
      value: 100,
      color: "border-green-400",
    },
    {
      name: "Egresos del mes",
      value: 20,
      color: "border-red-400",
    },
    {
      name: "Resultados del mes",
      value: 80,
      color: "border-blue-400",
    },
  ];

  const series = [
    {
      name: "Barra 1",
      type: "bar",
      data: [0, 0, 1500000, 3000000, 2400000, 0],
    },
    {
      name: "Barra 2",
      type: "bar",
      data: [0, 0, 500000, 1000000, 600000, 0],
    },
    {
      name: "Línea 1",
      type: "line",
      data: [0, 0, 1000000, 2000000, 1700000, 0],
    },
  ];

  // Configuración del gráfico
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false, // Oculta el menú de gráfico
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["May", "Jun", "Jul", "Ago", "Sep", "Oct"],
    },
    legend: {
      show: false, // Oculta la leyenda
    },
    dataLabels: {
      enabled: false, // Oculta las etiquetas de datos en las barras
    },
    colors: ["#ff666a", "#66be81", "#259af1"],
  };

  // Datos para el gráfico de pastel
  const pieData = [2400000, 2400000];

  // Calcula el total

  // Configuración del gráfico
  const pieOptions = {
    labels: ["Cobros Vencidos", "Por Vencer"],
    colors: ["#ff666a", "#66be81"], // Colores para cada sección del gráfico
    legend: {
      show: true, // Posición de la leyenda
    },
  };
  return (
    <>
      <div className="relative mx-auto mb-16 mt-20 max-w-screen-xl">
        <section>
          <div className="mb-6 grid grid-cols-3 gap-10">
            {dataCard.map((i) => {
              return (
                <div
                  key={i.name}
                  className={`flex w-full flex-col justify-between rounded border-l-4 ${i.color} bg-white p-4 leading-normal shadow-lg`}
                >
                  <div className="mb-8">
                    <p className="flex items-center text-sm text-gray-600">
                      {i.name}
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="text-sm font-bold">
                      <p className="leading-none text-gray-900">$ {i.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mb-6 grid justify-center bg-white leading-normal shadow-lg">
            <div className="flex items-center justify-center gap-4">
              Flujo de caja:
              <select
                name="select"
                className="form-input relative block   cursor-default rounded-md border-0 border-gray-300 bg-white py-1.5 pl-3 pr-10 text-left text-gray-800  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-gray-600 sm:text-sm sm:leading-6"
              >
                <option value="value1">Últimos 6 meses</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
              </select>
            </div>

            <Chart options={options} series={series} width={900} height={500} />
          </div>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 leading-normal shadow-lg">
              <div className="flex items-center justify-center gap-4">
                Cobros pendientes
              </div>
              <div className="pie-container">
                <Chart
                  options={pieOptions}
                  series={pieData}
                  type="donut"
                  height={350}
                />
              </div>
            </div>
            <div className="bg-white p-4 leading-normal shadow-lg">
              <div className="flex items-center justify-center gap-4 pb-10">
                Pagos pendientes
              </div>
              <div className="flex justify-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-check text-center text-[#66be81]"
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-4">
                Felicidades
              </div>
              <p className="flex items-center justify-center  text-gray-500">
                Todos tus pagos están al dia
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 bg-white p-4 shadow-lg">
            <div className="flex items-center justify-center gap-4 pb-2">
              Últimos Documentos
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Contacto</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">
                          Documento
                        </div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Emisión</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Monto</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Estado</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold"> </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    <tr>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            TODO ARAUCO S.A.
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-center ">
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span className="absolute inset-0 rounded-full bg-green-200 opacity-50" />
                            <span className="relative">Otro Tipo</span>
                          </span>
                          <p>3</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left">05-09-2023</div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left font-medium text-green-500">
                          $4,800.66
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex text-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-point-filled text-[#de9a59]"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                              strokeWidth={0}
                              fill="currentColor"
                            />
                          </svg>
                          Impaga
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2 text-[#259af1]">
                        <div className="text-center text-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-dots-vertical"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          </svg>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            TODO ARAUCO S.A.
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-center ">
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span className="absolute inset-0 rounded-full bg-red-200 opacity-50" />
                            <span className="relative">Otro Tipo</span>
                          </span>
                          <p>3</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left">05-09-2023</div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left font-medium text-green-500">
                          $4,800.66
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex text-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-point-filled text-[#66be81]"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                              strokeWidth={0}
                              fill="currentColor"
                            />
                          </svg>
                          Pagada
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2 text-[#259af1]">
                        <div className="text-center text-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-dots-vertical"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
