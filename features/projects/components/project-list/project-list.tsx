import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingAnimation } from "../loading-anim";
import { ProjectError } from "../project-error";


export function ProjectList() {
  const { data, isLoading, isError } = useGetProjects();

  if (isLoading) {
    return <LoadingAnimation />; // replace this with your loading animation component
  }

  if (isError) {
    return <ProjectError />;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
