import { GetStaticProps } from "next";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";

export interface ProjectCounterProps {
  projectAmountNumber: number;
}

const ProjectCount: FunctionComponent<ProjectCounterProps> = ({
  projectAmountNumber,
}) => {
  const [amountOfProjects, setProjectAmountNumber] = useState<number>(0);
  useEffect(() => {
    async function getProjectAmount() {
      let interval = 500;
      let startValue = 0;
      let endValue = projectAmountNumber;
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        setProjectAmountNumber(startValue);

        if (startValue == endValue) clearInterval(counter);
      }, duration);
    }
    getProjectAmount();
  }, [projectAmountNumber]);

  return (
    <div className="pt-36 text-center">
      <div className="relative">
        <div className="h-96">
          <Image
            src="/images/Project.png"
            alt="Project"
            className="object-contain "
            layout="fill"
          />
          <div className="pl-24 pt-56">
            <Image
              src="/images/ProjectWheel.png"
              alt="Projectwheel"
              className="object-contain animate-spin-slow z-10"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
      <h1 className="font-heading text-2xl sm:text-3xl pt-5 text-dinocream">
        {amountOfProjects} Projects
      </h1>
    </div>
  );
};

export default ProjectCount;
