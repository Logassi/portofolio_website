import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HomePageView from "@/views/pages/home-page";

const exampleData = [
  {
    title: "Card Title",
    description: "Card Description",
    content: "Card Content",
    footer: "Card Footer",
    time: "30",
    vegan: true,
    id: 1,
  },
  {
    title: "Card Title",
    description: "Card Description",
    content: "Card Content",
    footer: "Card Footer",
    time: "45",
    vegan: false,
    id: 2,
  },
  {
    title: "Card Title",
    description: "Card Description",
    content: "Card Content",
    footer: "Card Footer",
    time: "60",
    vegan: true,
    id: 3,
  },
];

export default function Home() {
  return (
    <div>
      <HomePageView />
    </div>
    // <main>
    //   <div className="grid grid-cols-3 gap-8">
    //     {exampleData.map((data) => (
    //       <Card key={data.id} className="flex flex-col justify-between">
    //         <CardHeader className="flex-row gap-4 items-center">
    //           <div>
    //             <CardTitle>{data.title}</CardTitle>
    //             <CardDescription>{data.time} mins to cook</CardDescription>
    //           </div>
    //         </CardHeader>

    //         <CardContent>
    //           <p>{data.description}</p>
    //         </CardContent>

    //         <CardFooter className="flex justify-between">
    //           <button>View Recipe</button>
    //           {data.vegan && <span>Vegan!</span>}
    //         </CardFooter>
    //       </Card>
    //     ))}
    //   </div>
    // </main>
  );
}
