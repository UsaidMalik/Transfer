import { urduCognates } from "./urdu";

export default function Page({ searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

    const destinationLang = searchParams["origin"] ?? ""; // default value is "1"

    let cognates = []
    if (destinationLang === "urdu"){
        cognates = urduCognates;
    }

    return (
        <div className="p-5 bg-gray-100 rounded w-full md:w-3/4 lg:w-1/2 mx-auto">
            <table className="w-full text-center">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="p-2">Urdu</th>
                        <th className="p-2">English</th>
                        <th className="p-2">Arabic</th>
                    </tr>
                </thead>
                <tbody>
                    {cognates.map((cognate, index) => (
                        <tr key={index} className="border-b border-blue-200 hover:bg-blue-100 transition-all duration-300">
                            <td className="p-2">{cognate.urdu}</td>
                            <td className="p-2">{cognate.english}</td>
                            <td className="p-2">{cognate.arabic}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}