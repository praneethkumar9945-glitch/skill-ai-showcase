import { createFileRoute } from "@tanstack/react-router";
import { Database } from "lucide-react";
import { CourseDetail } from "@/components/CourseDetail";
import heroImg from "@/assets/card-big-data.jpg";

export const Route = createFileRoute("/ai/big-data")({
  head: () => ({ meta: [{ title: "Master's in AIMLops & Big Data — SSCC" }, { name: "description", content: "24-week industry-embedded Master's in AIMLops & Big Data — Python, Spark, Kafka, MLOps, Cloud Lakehouse, GenAI. 288 hours, 144 sessions, 10 enterprise projects." }] }),
  component: () => (
    <CourseDetail
      eyebrow="Master's Programme · Industry-Embedded"
      title="Master's in AIMLops & Big Data"
      tagline="24 weeks · 288 hours · 144 sessions · 10 enterprise projects — from Python foundations to production AI, MLOps and Big Data engineering on cloud lakehouses."
      Icon={Database}
      heroImage={heroImg}
      duration="6 months (24 weeks)"
      fee="₹3.2 L"
      level="Intermediate → Advanced"
      mode="Hybrid · 2 hrs/day · 6 days"
      tools={[
        "Python", "SQL", "PostgreSQL", "MongoDB", "Redis",
        "Apache Spark", "Hadoop", "Kafka", "PySpark",
        "AWS S3", "AWS Glue", "Athena", "EMR", "Lambda",
        "Azure Data Lake", "BigQuery", "Snowflake", "Databricks",
        "TensorFlow", "PyTorch", "scikit-learn", "MLflow",
        "Docker", "Kubernetes", "FastAPI", "GitHub Actions",
        "Apache Airflow", "Prefect", "dbt", "Great Expectations",
        "Power BI", "Tableau",
        "LangChain", "LlamaIndex", "Pinecone", "FAISS", "OpenAI API",
      ]}
      roadmap={[
        { phase: "Weeks 1–2 · M1", title: "Python & Software Engineering Foundations", points: ["Advanced Python, OOP & Functional Programming", "Exception & file handling · Logging · venvs", "Git, GitHub, Linux, Bash · Unit testing", "API fundamentals · Code quality", "Project: Enterprise Data Processing Utility"] },
        { phase: "Weeks 3–4 · M2", title: "Relational & NoSQL Database Engineering", points: ["Advanced SQL & PostgreSQL", "MongoDB · Redis · schema design", "Indexing & query optimization", "Project: Enterprise database platform"] },
        { phase: "Weeks 5–7 · M3", title: "ETL/ELT Pipelines at Enterprise Scale", points: ["Batch & streaming ingestion", "Data modeling & transformations", "Data quality & lineage", "Project: Production-grade ETL system"] },
        { phase: "Weeks 8–10 · M4", title: "Big Data — Hadoop, Spark & Kafka", points: ["HDFS · YARN · MapReduce", "Apache Spark (batch + streaming)", "Kafka event pipelines", "Project: Large-scale data processing platform"] },
        { phase: "Weeks 11–13 · M5", title: "Cloud Data Engineering & Lakehouse Architecture", points: ["AWS S3, Glue, Athena, EMR, Lambda", "Azure Data Lake · BigQuery · Snowflake · Databricks", "Data warehouse · Data lake · Lakehouse", "Governance & cost optimization", "Project: Cloud Lakehouse Solution"] },
        { phase: "Weeks 14–16 · M6", title: "AI Engineering, Deep Learning & MLOps", points: ["Neural nets · TensorFlow · PyTorch · CNNs · Transformers", "MLflow · Docker · Kubernetes fundamentals · FastAPI", "Model packaging · CI/CD for ML", "Monitoring & drift detection", "Project: Production AI Service Deployment"] },
        { phase: "Weeks 17–18 · M7", title: "DataOps & Workflow Automation", points: ["Apache Airflow · Prefect · Dagster", "dbt · Great Expectations · CDC", "Workflow orchestration & data quality", "Project: Automated Enterprise Data Pipeline"] },
        { phase: "Weeks 19–20 · M8", title: "Business Intelligence & Decision Intelligence", points: ["Power BI · Tableau · KPI engineering", "Executive dashboards · Cohort · Funnel analytics", "Forecasting · Financial metrics", "Data storytelling · Automated reporting", "Project: Executive Business Dashboard"] },
        { phase: "Weeks 21–22 · M9", title: "Generative AI for Data Engineering & Analytics", points: ["LLM fundamentals · Prompt engineering · RAG", "Vector databases · AI agents", "LangChain · LlamaIndex · Document intelligence", "AI-assisted SQL · Enterprise copilots", "Project: Enterprise AI Data Assistant"] },
        { phase: "Weeks 23–24 · M10", title: "Enterprise Capstone Project", points: ["End-to-end solution architecture", "Agile + DevOps collaboration", "Security · Testing · Performance", "Production deployment · Client presentation", "Project: Complete AI & Big Data Platform"] },
      ]}
      outcomes={[
        "Build production-ready Python applications with engineering best practices",
        "Design relational, NoSQL and lakehouse data platforms",
        "Ship scalable ETL/ELT & streaming pipelines with Spark, Kafka & Airflow",
        "Deploy AI and ML models with MLflow, Docker, Kubernetes & FastAPI",
        "Architect cloud-native platforms on AWS, Azure, GCP, Snowflake & Databricks",
        "Integrate Generative AI, RAG & agents into enterprise data products",
        "Own end-to-end enterprise capstones — ingestion to production deployment",
        "Target roles: Data Engineer · ML Engineer · MLOps · GenAI Engineer · Cloud Data Platform Engineer",
      ]}
      careerRoles={[
        { role: "Data Engineer", anchor: "M1, M2, M3", desc: "Enterprise Python, SQL/NoSQL and production ETL/ELT pipelines" },
        { role: "Big Data Engineer", anchor: "M4", desc: "Hadoop, Spark and Kafka at petabyte scale" },
        { role: "Cloud Data Platform Engineer", anchor: "M5", desc: "AWS, Azure, Snowflake and Databricks lakehouses" },
        { role: "ML / AI Engineer", anchor: "M6", desc: "Deep learning, MLflow, Docker and FastAPI model serving" },
        { role: "MLOps Engineer", anchor: "M6, M7", desc: "CI/CD for ML, monitoring, Airflow, dbt & Great Expectations" },
        { role: "Analytics / BI Engineer", anchor: "M8", desc: "Executive dashboards, KPIs, forecasting with Power BI & Tableau" },
        { role: "GenAI Engineer", anchor: "M9", desc: "LangChain, LlamaIndex, RAG and enterprise AI copilots" },
        { role: "Solutions Architect", anchor: "M10", desc: "End-to-end AI + Big Data platform delivery" },
      ]}
    />
  ),
});
