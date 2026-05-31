# AWS DevOps CI/CD Pipeline

CI/CD deployment automation project using GitHub Actions, AWS EC2, Docker, and Linux.

## Pipeline Features

- Automated build workflows
- Continuous integration using GitHub Actions
- Automated deployment execution
- Linux-based deployment automation
- Deployment validation checks
- Application update automation
- Operational efficiency improvements


## Technologies Used
- GitHub Actions
- Docker
- AWS EC2
- Linux
- Bash Scripting
- CI/CD

## Workflow
1. Push code to GitHub
2. GitHub Actions pipeline triggers
3. Build process starts
4. Deployment scripts execute
5. Application deploys to EC2

## Future Improvements
- Kubernetes deployment
- Blue-green deployment strategy
- Monitoring integration
- Rollback automation
  ## Project Structure

aws-devops-cicd-pipeline/
│
├── .github/workflows/deploy.yml
├── Dockerfile
├── deploy.sh
├── docker-compose.yml
├── app.py
├── requirements.txt
└── README.md

## CI/CD Architecture

```text
          Developer
               │
               ▼
        GitHub Repository
               │
         Push Changes
               │
               ▼
      GitHub Actions Workflow
               │
      ┌────────┼────────┐
      ▼        ▼        ▼
    Build     Test    Validate
      │
      ▼
 Deployment Script
      │
      ▼
   AWS EC2 Server
      │
      ▼
 Application Update
      │
      ▼
 Health Verification
```
- Operational efficiency improvements
