import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const [services, setServices] = useState([
    {
      name: "User Service",
      technology: "Java • Spring Boot",
      endpoint: "/api/users/health",
      status: "Checking..."
    },
    {
      name: "Product Service",
      technology: "Python • FastAPI",
      endpoint: "/api/products/health",
      status: "Checking..."
    },
    {
      name: "Order Service",
      technology: "Node.js • Express",
      endpoint: "/api/orders/health",
      status: "Checking..."
    }
  ]);

  useEffect(() => {
    const checkServices = async () => {
      const updated = await Promise.all(
        services.map(async (service) => {
          try {
            const response = await fetch(service.endpoint);

            if (!response.ok) {
              throw new Error("Service unavailable");
            }

            const data = await response.json();

            return {
              ...service,
              status: data.status || "UP"
            };
          } catch {
            return {
              ...service,
              status: "DOWN"
            };
          }
        })
      );

      setServices(updated);
    };

    checkServices();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>DevNexus</h1>
          <p>Enterprise Cloud DevOps Platform on AWS</p>
        </div>

        <span className="status">● Platform Online</span>
      </header>

      <main>
        <section className="hero">
          <h2>Cloud-Native Microservices Platform</h2>

          <p>
            React Frontend running on Amazon EKS with Java, Python and
            Node.js microservices.
          </p>
        </section>

        <section className="architecture">
          <h2>Request Flow</h2>

          <div className="flow">
            <span>Users</span>
            <b>→</b>
            <span>React</span>
            <b>→</b>
            <span>Nginx</span>
            <b>→</b>
            <span>Amazon EKS</span>
            <b>→</b>
            <span>Microservices</span>
          </div>
        </section>

        <section>
          <h2>Microservices Health</h2>

          <div className="cards">
            {services.map((service) => (
              <div className="card" key={service.name}>
                <div
                  className={
                    service.status === "UP"
                      ? "card-status up"
                      : service.status === "DOWN"
                      ? "card-status down"
                      : "card-status"
                  }
                >
                  ● {service.status}
                </div>

                <h3>{service.name}</h3>

                <p>{service.technology}</p>

                <code>{service.endpoint}</code>
              </div>
            ))}
          </div>
        </section>

        <section className="devops">
          <h2>DevOps Stack</h2>

          <div className="tags">
            <span>GitHub</span>
            <span>Terraform</span>
            <span>Docker</span>
            <span>Amazon ECR</span>
            <span>Amazon EKS</span>
            <span>Kubernetes</span>
            <span>Helm</span>
            <span>Argo CD</span>
            <span>Prometheus</span>
            <span>Grafana</span>
            <span>EFK</span>
          </div>
        </section>
      </main>

      <footer>
        DevNexus • AWS DevOps Engineering Project
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
