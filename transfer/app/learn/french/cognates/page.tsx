import { englishCognates } from "./english";

export default function Page({ searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

    const originLang = searchParams["origin"] ?? ""; // default value is "1"

    let cognates = []
    if (originLang === "english"){
        cognates = englishCognates;
    }

    return (
        <div className="p-5 bg-gray-100 rounded w-full md:w-3/4 lg:w-1/2 mx-auto">
            <table className="w-full text-center">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="p-2">French</th>
                        <th className="p-2">English</th>
                    </tr>
                </thead>
                <tbody>
                    {cognates.map((cognate, index) => (
                        <tr key={index} className="border-b border-blue-200 hover:bg-blue-100 transition-all duration-300">
                            <td className="p-2">{cognate.french}</td>
                            <td className="p-2">{cognate.english}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}