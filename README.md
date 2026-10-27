
### Dress Smart. Lead Boldly.

**Nine To Chic** is a full-stack office-wear e-commerce web application designed to make professional fashion accessible, convenient, and personalized. It brings together curated workwear collections, product discovery, shopping cart management, wishlist functionality, and a streamlined checkout experience in one elegant shopping platform.

The project combines a responsive React frontend with a Java Spring Boot backend and MySQL database, with scope for personalized recommendations and AI-powered styling assistance.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Application Architecture](#-application-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Backend Configuration](#-backend-configuration)
- [API Reference](#-api-reference)
- [Database Design](#-database-design)
- [Future Enhancements](#-future-enhancements)
- [Security Considerations](#-security-considerations)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🛍️ Overview

Finding stylish and versatile office wear can be time-consuming. Nine To Chic aims to simplify that experience through a dedicated online store focused on professional clothing.

The platform is designed around a clean, fashion-oriented interface where users can explore collections, view product details, save their favorite items, manage their cart, and place orders.

The long-term vision is to extend the shopping experience with personalized recommendations and AI-assisted color and styling suggestions.

## 🎯 Project Objectives

- Build a responsive and user-friendly fashion e-commerce interface.
- Develop RESTful APIs using Java and Spring Boot.
- Integrate a relational database using MySQL and Spring Data JPA.
- Implement user registration and login workflows.
- Support product browsing, cart management, and order placement.
- Practice full-stack development, API integration, database design, and version control.
- Establish a foundation for personalized shopping and AI-assisted fashion recommendations.

## ✨ Features

### Fashion Storefront

- Elegant, fashion-focused user interface.
- Homepage featuring curated office-wear collections.
- Dedicated product categories for tops, bottoms, co-ord sets, accessories, and new arrivals.
- Product cards displaying images, names, prices, and ratings.
- Individual product detail pages.
- Similar-product discovery.

### Product Management

- Product data served through Spring Boot REST APIs.
- Product information stored in a MySQL database.
- Dynamic product retrieval and frontend API integration.
- Category-based product browsing.

### User Accounts

- User registration and login endpoints.
- User information stored in the database.
- Frontend login workflow connected to the backend.

### Shopping Experience

- Add products to the shopping cart.
- Increase or decrease product quantities.
- Remove products from the cart.
- Calculate item subtotals and cart totals.
- Apply the `WELCOME20` promotional coupon in the frontend.
- Place orders through the backend.
- Display order confirmation with order ID and total amount.
- Persist cart and order information through backend APIs.

### Wishlist

- Save favorite products for convenient access.
- Wishlist functionality integrated into the product browsing experience.

### Planned Personalization

- AI-assisted color and styling suggestions.
- Undertone-based fashion recommendations.
- Personalized product recommendations.
- Enhanced search, filtering, and sorting.
- User-specific wishlist persistence.

> **Project status:** This repository is under active development. Features listed as planned are part of the product roadmap and should not be assumed to be implemented. Backend integration, authentication, and checkout are also subject to ongoing testing and refinement.

## 🧰 Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Frontend tooling | Vite, npm |
| Routing | React Router |
| UI and icons | CSS, React Icons |
| Backend | Java, Spring Boot |
| API architecture | REST APIs, JSON |
| Persistence | Spring Data JPA, Hibernate |
| Database | MySQL |
| API testing | Postman |
| Version control | Git, GitHub |
| Development tools | Visual Studio Code, IntelliJ IDEA |

## 🏗️ Application Architecture

Nine To Chic follows a client-server architecture.
<img width="2822" height="2870" alt="mermaid-diagram" src="https://github.com/user-attachments/assets/ccfc85a6-5367-4e99-a1bd-e2ba09b1f86c" /># Nine To Chic 👗


### Request Flow

1. The user interacts with the React frontend.
2. The frontend sends HTTP requests to the Spring Boot REST API.
3. Controllers receive and route incoming requests.
4. Service classes implement business logic.
5. Spring Data JPA communicates with the MySQL database.
6. The backend returns JSON responses to the frontend.
7. React updates the interface based on the response.

## 📁 Project Structure

The following is a conceptual structure. Actual filenames and folders may differ as development progresses.

```text
nine-to-chic/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── videos/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── imageMap.js
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/ninetochic/backend/
│           │       ├── config/
│           │       ├── controller/
│           │       ├── entity/
│           │       ├── repository/
│           │       └── service/
│           └── resources/
│               └── application.properties
│
├── .gitignore
└── README.md
```

**Note:** The tree above is illustrative, not a claim about the exact current repository layout. Adapt it to match the folders actually committed to GitHub.

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Install the following tools:

- [Git](https://git-scm.com/)
- [Node.js and npm](https://nodejs.org/)
- [Java JDK](https://adoptium.net/)
- [Apache Maven](https://maven.apache.org/)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- An IDE such as IntelliJ IDEA or Visual Studio Code.

### 1. Clone the Repository

```bash
git clone https://github.com/ankitaa1505/nine-to-chic.git
cd nine-to-chic
```

If the frontend and backend are stored in separate directories or repositories, navigate to the appropriate project directory before running the commands below.

### 2. Start the Frontend

Open a terminal in the directory containing the frontend's `package.json`.

```bash
npm install
npm run dev
```

Vite typically starts the application at:

```text
http://localhost:5173
```

Use the local URL displayed in the terminal if Vite selects a different port.

### 3. Configure MySQL

Start your MySQL server and create a database:

```sql
CREATE DATABASE nine_to_chic;
```

Configure the backend to use the database you created.

### 4. Configure the Backend

Open the Spring Boot backend project in IntelliJ IDEA.

Update the database configuration in `src/main/resources/application.properties` or use environment variables, as appropriate for your project.

Example configuration:

```properties
spring.datasource.url=${DB_URL:jdbc:mysql://localhost:3306/nine_to_chic}
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
```

Set `DB_PASSWORD` to your local MySQL password before starting the backend. If your project uses a different database name, username, or configuration format, update these values accordingly.

Ensure the required MySQL JDBC driver and Spring Boot dependencies are present in `pom.xml`.

### 5. Run the Backend

From the directory containing the backend's `pom.xml`, run:

```bash
mvn clean install
mvn spring-boot:run
```

The backend is expected to run at:

```text
http://localhost:8080
```

Confirm that the application starts successfully and that the database connection is established.

### 6. Verify the Application

Open the frontend in your browser and check the product listing.

The following API URLs can be used to test the backend, provided the corresponding controllers are running:

```text
GET http://localhost:8080/api/products
POST http://localhost:8080/api/users/signup
POST http://localhost:8080/api/users/login
```

Use Postman to test requests that require a JSON body.

## ⚙️ Backend Configuration

Before running the application, verify the following:

- MySQL is running and accessible.
- The configured database exists.
- The backend uses the correct database credentials.
- The frontend API base URL matches the backend URL.
- CORS permits the frontend's actual development origin.
- Required Maven dependencies have been downloaded.
- Environment-specific secrets are not committed to GitHub.

Never commit passwords, API keys, private tokens, or production credentials. Keep local environment files out of version control.

## 🔌 API Reference

The following endpoints describe the current API design. Verify each endpoint against the controller implementation before relying on it.

### Products

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/products` | Retrieve products |
| GET | `/api/products/{id}` | Retrieve a product by ID |

### Users

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/users/signup` | Register a user |
| POST | `/api/users/login` | Authenticate a user |

Example signup request:

```json
{
  "name": "Example User",
  "email": "user@example.com",
  "password": "your-password"
}
```

### Cart

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/cart/{userId}` | Retrieve a user's cart |
| POST | `/api/cart/{userId}/{productId}` | Add a product to the cart |
| PUT | `/api/cart/{userId}/{productId}/increase` | Increase quantity |
| PUT | `/api/cart/{userId}/{productId}/decrease` | Decrease quantity |
| DELETE | `/api/cart/{userId}/{productId}` | Remove a product |

### Orders

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/orders/{userId}` | Place an order |
| GET | `/api/orders/{userId}` | Retrieve a user's orders |

**Base URL:** `http://localhost:8080`

These endpoints represent the API paths used in the project. Authentication, authorization, validation, and error responses should be verified against the current implementation before deployment.

## 🗄️ Database Design

The database is designed around the main entities required for an e-commerce workflow.

| Entity | Purpose |
|---|---|
| User | Stores registered user information |
| Product | Stores product details, prices, categories, images, and ratings |
| CartItem | Associates products and quantities with a user's cart |
| Order | Stores order ownership and total amount |
| OrderItem | Stores the products, quantities, and prices associated with an order |

### Entity Relationships

- A user can have multiple cart items.
- A user can place multiple orders.
- An order can contain multiple order items.
- Each cart item or order item references a product.

Spring Data JPA and Hibernate manage object-relational mapping between Java entities and database tables.

## 🗺️ Future Enhancements

The following features are planned for future iterations:

- **Secure authentication:** BCrypt password hashing, token-based authentication, and authorization.
- **Payment integration:** Secure payment gateway integration and payment status tracking.
- **Order management:** Order history, cancellation, shipment status, and order details.
- **Advanced discovery:** Search, category filters, sorting, and pagination.
- **Personalized shopping:** Recommendation engine based on product categories and user preferences.
- **AI fashion assistant:** Styling advice and undertone-aware product recommendations.
- **Inventory management:** Product stock tracking and availability validation.
- **Administrative dashboard:** Product, inventory, and order management.
- **Automated testing:** Unit, integration, and API tests.
- **Deployment:** Production hosting, environment-based configuration, and CI/CD.
- **Observability:** Structured logging, health checks, and error monitoring.

## 🔐 Security Considerations

Security is an important part of the project's ongoing development.

Before production deployment:

- Hash passwords using a suitable password-hashing algorithm such as BCrypt.
- Never return password hashes or plaintext passwords in API responses.
- Enforce authorization so users can access only their own carts and orders.
- Validate request bodies and handle exceptions with appropriate HTTP status codes.
- Configure CORS for trusted origins only.
- Apply appropriate CSRF protections based on the chosen authentication approach.
- Keep credentials and API keys in environment variables or a secrets manager.
- Validate product prices, stock, discounts, and order totals on the server.
- Integrate a payment gateway without storing raw payment-card details.

The project should be considered a development application until these controls are implemented and tested.

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and test them locally.
4. Commit your changes with a descriptive message.
5. Open a pull request explaining the changes.

Example:

```bash
git checkout -b feature/your-feature
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

For bugs or feature requests, open an issue in the GitHub repository with steps to reproduce the problem and relevant details.

## 👩‍💻 Author

**Ankita Awatade**

- GitHub: [@ankitaa1505](https://github.com/ankitaa1505)
- Project repository: [Nine To Chic](https://github.com/ankitaa1505/nine-to-chic)

## 📄 License

No license has been specified in this README. If you intend to distribute the project as open source, choose an appropriate license and add its full text in a `LICENSE` file before claiming that the project is released under that license.

---

**Nine To Chic — Dress Smart. Lead Boldly.**


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
