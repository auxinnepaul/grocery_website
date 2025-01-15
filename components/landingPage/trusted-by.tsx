// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

import { Marquee } from "../21st.dev/marquee";

// const trustedCompanies = [
//   { name: "FreshEats", logo: "/placeholder.svg?height=80&width=160" },
//   { name: "GreenGrocer", logo: "/placeholder.svg?height=80&width=160" },
//   { name: "OrganicLife", logo: "/placeholder.svg?height=80&width=160" },
//   { name: "NatureMart", logo: "/placeholder.svg?height=80&width=160" },
//   { name: "EcoHarvest", logo: "/placeholder.svg?height=80&width=160" },
//   { name: "PureFood Co.", logo: "/placeholder.svg?height=80&width=160" },
// ];

// export default function TrustedBy() {
//   return (
//     <section className="py-16 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
// <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
//   Trusted by Leading Businesses
// </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {trustedCompanies.map((company) => (
//             <Card
//               key={company.name}
//               className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <CardContent className="p-6 flex items-center justify-center h-full">
// <Image
//   src={company.logo}
//   alt={`${company.name} logo`}
//   width={160}
//   height={80}
//   className="max-w-full h-auto"
// />
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
const Logos = {
  FreshEats: () => (
    <Image
      src="https://plus.unsplash.com/premium_photo-1674169166760-89ac9c5842c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEZyZXNoJTIwRWF0cyUyMExvZ298ZW58MHx8MHx8fDA%3D"
      alt="FreshEats Logo"
      className="h-[100px] w-[200px]"
      width={1000}
      height={280}
    />
  ),
  GreenGrocer: () => (
    <Image
      src="https://plus.unsplash.com/premium_photo-1725196652887-e0a497f6bdd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R3JlZW4lMjBHcm9jZXIlMjBsb2dvfGVufDB8fDB8fHww"
      alt="GreenGrocer Logo"
      className="h-[100px] w-[200px]"
      width={20}
      height={20}
    />
  ),
  OrganicLife: () => (
    <Image
      src="https://plus.unsplash.com/premium_photo-1687256889078-16f97e1dc037?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8T3JnYW5pYyUyMExpZmUlMjBsb2dvfGVufDB8fDB8fHww"
      alt="OrganicLife Logo"
      className="h-[100px] w-[250px]"
      width={1000}
      height={280}
    />
  ),
  NatureMart: () => (
    <Image
      src="https://plus.unsplash.com/premium_photo-1700520223949-31b695c57079?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE5hdHVyZSUyME1hcnQlMjBsb2dvfGVufDB8fDB8fHww"
      alt="FreshEats Logo"
      className="h-[100px] w-[150px]"
      width={1000}
      height={280}
    />
  ),

  EcoHarvest: () => (
    <Image
      src="https://images.unsplash.com/photo-1560393896-8e0db018b5a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm0lMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D"
      alt="FreshEats Logo"
      className="h-[100px] w-[150px]"
      width={1000}
      height={280}
    />
  ),

  PureFood: () => (
    <Image
      src="https://images.unsplash.com/photo-1560393896-8e0db018b5a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm0lMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D"
      alt="FreshEats Logo"
      className="h-[100px] w-[100px]"
      width={1000}
      height={280}
    />
  ),
};

export default function TrustedBy() {
  const arr = [
    Logos.FreshEats,

    Logos.GreenGrocer,
    Logos.OrganicLife,
    Logos.NatureMart,
  ];

  return (
    <div className="pt-20 hidden lg:block">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
        The best are already here
      </h2>
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200">
        Join new cult
      </h2>
      <Marquee>
        {arr.map((Logo, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
          >
            <Logo />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
