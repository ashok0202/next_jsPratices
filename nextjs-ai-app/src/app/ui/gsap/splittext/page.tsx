import RotatingText from "@/components/animations/rotating-text";

const page = () => {

  return (
    <div className="flex flex-col items-center">
      <RotatingText
        texts={["React", "Java script", "TypeScript", "Cool To learn"]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-blue-500 to-blue-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
};

export default page;
