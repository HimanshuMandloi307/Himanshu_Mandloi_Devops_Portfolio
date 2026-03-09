import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Zevo360 Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Managing AWS cloud infrastructure and Kubernetes (EKS) clusters
              hosting multiple production microservices. Building CI/CD pipelines
              using Jenkins and GitHub Actions, implementing GitOps workflows
              with ArgoCD, and automating infrastructure using Terraform.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior DevOps Engineer</h4>
                <h5>Evolve Infotech</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              Built and optimized Jenkins CI/CD pipelines reducing deployment
              time by 40%. Deployed containerized applications using Docker and
              Kubernetes, configured AWS infrastructure, and automated
              deployment tasks using shell scripting.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;