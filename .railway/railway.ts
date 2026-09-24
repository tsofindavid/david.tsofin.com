import { defineRailway, github, project, service } from "railway/iac";

export default defineRailway(() => {
  const web = service("web", {
    source: github("tsofindavid/david.tsofin.com"),
    build: {
      builder: "DOCKERFILE",
		  dockerfilePath: "Dockerfile"
    }
  });

  return project("david.tsofin.com", {
    resources: [web],
  });
});
