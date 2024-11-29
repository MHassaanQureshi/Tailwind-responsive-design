export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:block lg:flex lg:items-stretch lg:flex-row">
      <div className="bg-red-500 h-[160px] md:w-full lg:w-1/3 lg:h-80">
        Contrary to popular belief
      </div>
      <div className="flex flex-col md:flex-row lg:flex lg:w-2/3 lg:items-stretch">
        <div className="bg-blue-500 h-40 md:w-1/2 lg:w-1/2 lg:h-80">
          Contrary to popular belief
        </div>
        <div className="bg-green-500 h-40 md:w-1/2 lg:w-1/2 lg:h-80">
          Contrary to popular belief
        </div>
      </div>
    </div>
  );
}
