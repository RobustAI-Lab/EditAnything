import { Shell } from "@/components/shell";
import { technologies } from "@/config/technologies";
import { TechnologyDetailedCard } from "./technology-detailed-card";

export async function TechMain() {
  return (
    <Shell>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6">
        <div className="max-w-3xl w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Technologies in our product
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              We use a variety of technologies to build our product, they are
              robust, scalable, secure, and open-source. Follow our blogs to
              learn more about how we use these technologies, and how you can
              use them in your projects.
            </p>
          </div>
          {technologies.map((technology) => (
            <TechnologyDetailedCard
              technology={technology}
              key={technology.name}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
}
