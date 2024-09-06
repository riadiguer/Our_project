type CourseCardProps = {
    title: string;
    description: string;
    price: number;
  };
  
  export default function CourseCard({ title, description, price }: CourseCardProps) {
    return (
      <div className="border p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <p className="font-bold">Price: ${price}</p>
      </div>
    );
  }
  