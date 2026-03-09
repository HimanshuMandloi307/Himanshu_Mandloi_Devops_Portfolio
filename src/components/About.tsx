import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          DevOps Engineer with 3+ years of experience in AWS cloud
          infrastructure, Kubernetes (EKS), Docker, and CI/CD automation.
          Skilled in Infrastructure as Code using Terraform and implementing
          GitOps workflows with ArgoCD. Passionate about building scalable,
          reliable, and automated deployment pipelines for cloud-native
          applications.
        </p>
      </div>
    </div>
  );
};

export default About;
