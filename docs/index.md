---
icon: hand-wave
cover: >-
  https://moer.tel/cdn/shop/files/moertel_pixel_art_banner_highway.png?v=1691086755&width=1500
coverY: 0
layout:
  cover:
    visible: true
    size: full
  title:
    visible: false
  description:
    visible: false
  tableOfContents:
    visible: false
  outline:
    visible: false
  pagination:
    visible: true
---

# David Tsofin
**Senior Backend Engineer | Technical Lead | AI Systems**

Bratislava, Slovakia (EU work permit, contracting via own entity) | [tsofindavid@gmail.com](mailto:tsofindavid@gmail.com) | [LinkedIn](https://www.linkedin.com/in/tsofindavid/) | [PDF Version](https://github.com/tsofindavid-personal/cv/raw/main/david-tsofin-cv.pdf)

---

## Professional Summary

Backend engineer and technical lead with 6+ years building distributed systems for enterprise B2B SaaS, primarily on Node.js/TypeScript. Currently technical lead for the backend of an enterprise Salesforce DevOps platform, owning architecture, API design, data consistency and production reliability, and driving the migration of several hundred enterprise clients from a legacy product. Technical point of contact for large enterprise accounts, including custom architecture work for a Fortune 500 client.

Also design and ship LLM-based systems end-to-end: AI agents, RAG, MCP integrations and human-in-the-loop document automation — both within the platform and as independent client and product work. Comfortable across the stack, from system design and code review to infrastructure, observability and security.

---

## Technical Skills

**Languages:** TypeScript, JavaScript, Go, Java, Python, C#, SQL
**Backend & Architecture:** Node.js, NestJS, Express, Spring Boot, ASP.NET Core, REST API design, microservices, event-driven architecture, gRPC, distributed systems, system design
**AI & Data:** LLM applications, AI agents, RAG, MCP, semantic/vector search (Qdrant, pgvector), prompt engineering, human-in-the-loop workflows
**Databases & Storage:** PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, Amazon S3
**Messaging:** RabbitMQ, asynchronous/event-driven processing
**Cloud & Infra:** AWS (Lambda, ECS, S3, RDS), Docker & Docker Compose, Kubernetes (working knowledge), Terraform (working knowledge)
**Observability:** Prometheus, Grafana, ELK
**Security & Identity:** OAuth2, OIDC, SAML, authentication/authorization, access control
**Salesforce Ecosystem:** SOQL, Apex, Metadata API, sfdx (architectural level)
**Practices:** technical leadership, system design, architecture and code review, mentoring, performance reviews, production incident response/on-call, client-facing technical consulting, presales technical calls

---

## Professional Experience

### Success Craft — Backend Engineer → Technical Lead
*Feb 2022 – Present | Remote (B2B contract)*

Enterprise Salesforce DevOps platform (B2B SaaS) — Git-like release and change management for Salesforce development. ~100-person company, ~50 engineers; technical lead for a ~30-person product team including ~15 backend engineers.

- Joined as a backend engineer and grew into technical lead of a ~30-person product team, owning architecture, technical direction, design and code review, and delivery
- Designed the core change-tracking storage system: a Git-like model with structured metadata in PostgreSQL and client data in Amazon S3, processing hundreds of GB daily
- Drove the architecture and technical execution of a ~2-year migration moving several hundred enterprise clients from a native DevOps product onto the new cloud platform
- Designed and shipped the public REST API and integration layer connecting the platform to Salesforce and ServiceNow ecosystems
- Designed and built an AI integration layer over the platform's existing services without modifying them: MCP server with full API coverage, task-level composite tools orchestrating multi-step service calls, embedded business rules and pre-call validation, enabling AI agents to operate the platform safely and predictably
- Built and operated the platform's microservices architecture on AWS (Lambda, ECS, S3, RDS) with RabbitMQ for asynchronous processing
- Designed and built AWS infrastructure emulating a Fortune 500 client's private network to meet their security requirements, acting as lead technical contact for the engagement
- Serve as technical point of contact for enterprise clients: presales technical calls, custom architecture and platform adaptation for large accounts
- Grew 3 engineers into fully independent contributors; conduct regular performance reviews
- First responder for production incidents; set up and maintain observability (Prometheus, Grafana)
- Integrated OAuth2/OIDC/SAML for enterprise authentication requirements

**Stack:** Node.js, NestJS, TypeScript, PostgreSQL, MySQL, AWS (Lambda, ECS, S3, RDS), RabbitMQ, MCP, Docker, Kubernetes, Terraform, Prometheus, Grafana

### Independent Consulting & Product Development — Founder / Engineer

AI systems and LLM-based automation for clients and own products.

- **Social Network Sales With AI** — designed, built and shipped solo in ~6 weeks a SaaS AI agent automating Instagram DMs: learns an account's communication style from posts and conversation history, handles routine inbound messages according to user-defined scenarios, tone and constraints, and routes conversations that need human attention. Live in production. *Go, React*
- **Tender document automation** (client project) — built an AI pipeline turning 20–30 pages of tender requirements into ready-to-submit documents from client-managed DOCX templates, with human-in-the-loop review: every AI-generated or modified element is visually marked, so reviewers verify only flagged content instead of re-reading the whole document. Cut preparation time from ~5 hours per document to 30min. *Node.js, Telegram Bot API*
- **Legal knowledge base for AI agents** — built a semantic search platform over legislation supporting both current and historical versions of legal provisions for period-specific research, exposed to AI agents via an MCP server so answers are grounded in actual norms rather than model knowledge. Ingestion pipeline, REST API and web frontend, with confidentiality and access control designed in from day one. *Java, Spring Boot, Qdrant, pgvector, Vue.js*

### Whale Studio — Backend Engineer
*Jun 2021 – Feb 2022*

High-traffic e-commerce and real-time multiplayer gaming backends.

- Built a real-time multiplayer backend on WebSockets (Socket.io) handling concurrent user sessions at scale
- Reduced latency and improved throughput on high-traffic e-commerce systems through Redis caching strategies and PostgreSQL query optimization

**Stack:** NestJS, Socket.io, PostgreSQL, Redis

### Alpha Orion — Full-Stack Developer
*Sep 2019 – Jun 2021*

Software for unmanned systems and industrial hardware testing.

- Built backend systems for a UAV fleet management platform (fleet state, telemetry, mission data)
- Developed full-stack tooling for industrial hardware testing across the whole stack: backend services, an Electron.js desktop client, and the embedded (Arduino) layer
- Applied a mechanical engineering background to hardware-software integration work

**Stack:** ASP.NET Core, C#, PostgreSQL, RabbitMQ, JavaScript, Electron.js, Arduino

---

## Education

Slovak University of Technology, Bratislava — BSc, Applied Informatics *(2024 – Present)*
Belarusian National Technical University — IT and Robotics *(2018 – 2020)*

---

## Languages

English — Professional working proficiency | Slovak — B1 | Russian — Native