import { Fab } from "../../components/fab/fab.component";
import "./projects.styles.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="content">
        <Fab
          icon={faPlus}
          text="Project"
          onClick={() => console.log("fab clicked")}
        />
      </div>
    </div>
  );
};
