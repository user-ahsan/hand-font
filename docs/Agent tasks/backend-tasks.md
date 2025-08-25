# Backend Development Tasks - HandFont App

## 📋 **LATEST VERSION INFORMATION (Updated: 2025)**

**Key Technology Updates:**
- **Node.js**: 22.0.0 (Latest LTS)
- **Express**: 5.0.0 (Latest major)
- **Prisma**: 5.10.0 (Latest stable)
- **TypeScript**: 5.5.0 (Latest stable)
- **PostgreSQL**: 17.0 (Latest major)
- **Helmet**: 8.0.0 (Latest major)
- **Sharp**: 0.33.0 (Latest stable)

## 🎯 **AI AGENT INSTRUCTIONS - READ CAREFULLY**

**CRITICAL RULES TO FOLLOW:**
1. **Complete tasks in EXACT order** - do not skip or reorder tasks
2. **Mark checkboxes as done** after completing each task/subtask
3. **Follow production development workflow** - setup first, then core services, then API endpoints
4. **Use specified libraries** - do not create from scratch unless absolutely necessary
5. **Test each endpoint** before moving to next task
6. **Work from root directory** - this is a monorepo setup
7. **Use TypeScript strictly** - no `any` types allowed
8. **Follow RESTful API standards** and proper error handling

---

## 🏗️ **PROJECT STRUCTURE & SETUP**

### **Backend Directory Structure (backend/)**
```
backend/
├── package.json
├── tsconfig.json
├── nodemon.json
├── .env.example
├── .env
├── src/
│   ├── index.ts (Server entry point)
│   ├── app.ts (Express app configuration)
│   ├── config/
│   │   ├── database.ts (Database configuration)
│   │   ├── environment.ts (Environment variables)
│   │   └── cors.ts (CORS configuration)
│   ├── routes/
│   │   ├── index.ts (Route aggregator)
│   │   ├── auth.routes.ts (Authentication routes)
│   │   ├── font.routes.ts (Font generation routes)
│   │   ├── user.routes.ts (User management routes)
│   │   └── health.routes.ts (Health check routes)
│   ├── controllers/
│   │   ├── auth.controller.ts (Authentication logic)
│   │   ├── font.controller.ts (Font generation logic)
│   │   ├── user.controller.ts (User management logic)
│   │   └── health.controller.ts (Health check logic)
│   ├── services/
│   │   ├── font.service.ts (Font processing service)
│   │   ├── storage.service.ts (File storage service)
│   │   ├── auth.service.ts (Authentication service)
│   │   └── user.service.ts (User management service)
│   ├── middleware/
│   │   ├── auth.middleware.ts (JWT verification)
│   │   ├── validation.middleware.ts (Request validation)
│   │   ├── rateLimiter.middleware.ts (Rate limiting)
│   │   └── errorHandler.middleware.ts (Error handling)
│   ├── utils/
│   │   ├── logger.ts (Logging utility)
│   │   ├── validator.ts (Validation utilities)
│   │   ├── response.ts (Response formatting)
│   │   └── fileUtils.ts (File handling utilities)
│   ├── types/
│   │   ├── express.d.ts (Express type extensions)
│   │   ├── font.types.ts (Font-related types)
│   │   ├── user.types.ts (User-related types)
│   │   └── api.types.ts (API response types)
│   └── prisma/
│       ├── schema.prisma (Database schema)
│       └── migrations/ (Database migrations)
```

---

## 📚 **RESOURCES & DEPENDENCIES**

### **Backend Dependencies (backend/package.json)**
```json
{
  "name": "hand-font-backend",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio"
  },
  "dependencies": {
    "express": "^5.0.0",
    "cors": "^2.8.5",
    "helmet": "^8.0.0",
    "morgan": "^1.10.0",
    "dotenv": "^16.3.1",
    "prisma": "^5.10.0",
    "@prisma/client": "^5.10.0",
    "clerk": "^0.0.0",
    "multer": "^1.4.5-lts.1",
    "sharp": "^0.33.0",
    "uuid": "^10.0.0",
    "zod": "^3.23.0",
    "express-rate-limit": "^8.0.0",
    "compression": "^1.7.4"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/cors": "^2.8.17",
    "@types/morgan": "^1.9.9",
    "@types/node": "^22.0.0",
    "@types/multer": "^1.4.11",
    "@types/uuid": "^10.0.0",
    "@types/compression": "^1.7.5",
    "typescript": "^5.5.0",
    "ts-node": "^10.9.1",
    "nodemon": "^3.1.0",
    "prisma": "^5.10.0"
  }
}
```

---

## 🚀 **PHASE 1: PROJECT SETUP & FOUNDATION**

### **Task 1: Backend Project Setup**
- [ ] 1.1 Navigate to backend directory: `cd backend/`
- [ ] 1.2 Initialize package.json: `npm init -y`
- [ ] 1.3 Install all dependencies: `npm install express@^5.0.0 cors@^2.8.5 helmet@^8.0.0 morgan@^1.10.0 dotenv@^16.3.1 prisma@^5.10.0 @prisma/client@^5.10.0 clerk multer@^1.4.5-lts.1 sharp@^0.33.0 uuid@^10.0.0 zod@^3.23.0 express-rate-limit@^8.0.0 compression@^1.7.4`
- [ ] 1.4 Install dev dependencies: `npm install -D @types/express@^5.0.0 @types/cors@^2.8.17 @types/morgan@^1.9.9 @types/node@^22.0.0 @types/multer@^1.4.11 @types/uuid@^10.0.0 @types/compression@^1.7.5 typescript@^5.5.0 ts-node@^10.9.1 nodemon@^3.1.0 prisma@^5.10.0`
- [ ] 1.5 Create backend directory structure as specified above
- [ ] 1.6 Configure TypeScript (strict mode)
- [ ] 1.7 Set up nodemon for development

### **Task 2: Configuration Files Setup**
- [ ] 2.1 Create tsconfig.json with strict TypeScript settings
- [ ] 2.2 Create nodemon.json for development
- [ ] 2.3 Create .env.example and .env files
- [ ] 2.4 Set up environment variables configuration
- [ ] 2.5 Configure CORS settings
- [ ] 2.6 Set up logging configuration

### **Task 3: Database Setup**
- [ ] 3.1 Initialize Prisma: `npx prisma init`
- [ ] 3.2 Create database schema (Prisma schema)
- [ ] 3.3 Set up database connection configuration
- [ ] 3.4 Generate Prisma client: `npx prisma generate`
- [ ] 3.5 Test database connection

---

## 🔧 **PHASE 2: CORE SERVER SETUP**

### **Task 4: Express Server Configuration**
- [ ] 4.1 Create main server file (src/index.ts)
- [ ] 4.2 Set up Express app configuration (src/app.ts)
- [ ] 4.3 Configure middleware (CORS, Helmet, Morgan, Compression)
- [ ] 4.4 Set up error handling middleware
- [ ] 4.5 Configure rate limiting
- [ ] 4.6 Set up request validation middleware

### **Task 5: Database Models & Schema**
- [ ] 5.1 Define User model in Prisma schema
- [ ] 5.2 Define Font model in Prisma schema
- [ ] 5.3 Define FontCapture model for drawing data
- [ ] 5.4 Set up proper relationships between models
- [ ] 5.5 Add database indexes for performance
- [ ] 5.6 Run database migrations

### **Task 6: Authentication Setup**
- [ ] 6.1 Configure Clerk authentication
- [ ] 6.2 Set up JWT verification middleware
- [ ] 6.3 Create authentication service
- [ ] 6.4 Implement user session management
- [ ] 6.5 Set up protected route middleware

---

## 🎯 **PHASE 3: CORE SERVICES IMPLEMENTATION**

### **Task 7: Font Processing Service**
- [ ] 7.1 Create font service structure
- [ ] 7.2 Implement SVG path processing
- [ ] 7.3 Add font generation logic (TTF, OTF, WOFF)
- [ ] 7.4 Implement AI pattern generation for missing characters
- [ ] 7.5 Add font validation and quality checks
- [ ] 7.6 Implement font optimization algorithms

### **Task 8: File Storage Service**
- [ ] 8.1 Set up file upload handling with Multer
- [ ] 8.2 Implement file storage (local/cloud)
- [ ] 8.3 Add file validation and security checks
- [ ] 8.4 Implement file cleanup and management
- [ ] 8.5 Add file compression and optimization
- [ ] 8.6 Set up backup and recovery systems

### **Task 9: User Management Service**
- [ ] 9.1 Implement user registration and login
- [ ] 9.2 Add user profile management
- [ ] 9.3 Implement font library management
- [ ] 9.4 Add user preferences and settings
- [ ] 9.5 Implement user analytics and tracking

---

## 🌐 **PHASE 4: API ENDPOINTS IMPLEMENTATION**

### **Task 10: Health Check Routes**
- [ ] 10.1 Create health check endpoint (/health)
- [ ] 10.2 Add database health check
- [ ] 10.3 Implement system status monitoring
- [ ] 10.4 Add performance metrics
- [ ] 10.5 Test health endpoints

### **Task 11: Authentication Routes**
- [ ] 11.1 Create user registration endpoint (/auth/register)
- [ ] 11.2 Implement user login endpoint (/auth/login)
- [ ] 11.3 Add password reset functionality
- [ ] 11.4 Implement email verification
- [ ] 11.5 Add logout and session management
- [ ] 11.6 Test all authentication endpoints

### **Task 12: Font Generation Routes**
- [ ] 12.1 Create font generation endpoint (/api/fonts/generate)
- [ ] 12.2 Implement font download endpoint (/api/fonts/:id/download)
- [ ] 12.3 Add font preview endpoint (/api/fonts/:id/preview)
- [ ] 12.4 Implement font editing endpoint (/api/fonts/:id/edit)
- [ ] 12.5 Add font deletion endpoint (/api/fonts/:id/delete)
- [ ] 12.6 Test all font endpoints

### **Task 13: User Management Routes**
- [ ] 13.1 Create user profile endpoint (/api/users/profile)
- [ ] 13.2 Implement font library endpoint (/api/users/fonts)
- [ ] 13.3 Add user settings endpoint (/api/users/settings)
- [ ] 13.4 Implement user analytics endpoint (/api/users/analytics)
- [ ] 13.5 Add user deletion endpoint (/api/users/delete)
- [ ] 13.6 Test all user endpoints

---

## 🔒 **PHASE 5: SECURITY & VALIDATION**

### **Task 14: Input Validation**
- [ ] 14.1 Implement request body validation with Zod
- [ ] 14.2 Add file upload validation
- [ ] 14.3 Implement query parameter validation
- [ ] 14.4 Add route parameter validation
- [ ] 14.5 Test validation middleware

### **Task 15: Security Implementation**
- [ ] 15.1 Set up Helmet security headers
- [ ] 15.2 Implement rate limiting per endpoint
- [ ] 15.3 Add request size limits
- [ ] 15.4 Implement CORS policy
- [ ] 15.5 Add input sanitization
- [ ] 15.6 Test security measures

### **Task 16: Error Handling**
- [ ] 16.1 Create custom error classes
- [ ] 16.2 Implement global error handler
- [ ] 16.3 Add error logging and monitoring
- [ ] 16.4 Implement error response formatting
- [ ] 16.5 Add error tracking and analytics

---

## 📊 **PHASE 6: PERFORMANCE & OPTIMIZATION**

### **Task 17: Performance Optimization**
- [ ] 17.1 Implement response compression
- [ ] 17.2 Add response caching headers
- [ ] 17.3 Implement database query optimization
- [ ] 17.4 Add connection pooling
- [ ] 17.5 Implement lazy loading for large files

### **Task 18: Monitoring & Logging**
- [ ] 18.1 Set up comprehensive logging system
- [ ] 18.2 Implement performance monitoring
- [ ] 18.3 Add request/response logging
- [ ] 18.4 Implement error tracking
- [ ] 18.5 Add health monitoring dashboard

### **Task 19: Testing & Quality Assurance**
- [ ] 19.1 Write unit tests for services
- [ ] 19.2 Test all API endpoints
- [ ] 19.3 Implement integration tests
- [ ] 19.4 Add performance tests
- [ ] 19.5 Test error handling scenarios

---

## 🚀 **PHASE 7: INTEGRATION & DEPLOYMENT**

### **Task 20: Frontend Integration**
- [ ] 20.1 Test API integration with frontend
- [ ] 20.2 Implement CORS for frontend domain
- [ ] 20.3 Test file upload from frontend
- [ ] 20.4 Verify font generation workflow
- [ ] 20.5 Test user authentication flow

### **Task 21: Environment Configuration**
- [ ] 21.1 Set up production environment variables
- [ ] 21.2 Configure database for production
- [ ] 21.3 Set up file storage for production
- [ ] 21.4 Configure logging for production
- [ ] 21.5 Set up monitoring for production

### **Task 22: Deployment Preparation**
- [ ] 22.1 Create Docker configuration
- [ ] 22.2 Set up CI/CD pipeline
- [ ] 22.3 Create deployment scripts
- [ ] 22.4 Prepare production build
- [ ] 22.5 Create deployment documentation

---

## ✅ **COMPLETION CHECKLIST**

**Backend Development Status:**
- [ ] **PHASE 1: Project Setup** - COMPLETED
- [ ] **PHASE 2: Core Server** - COMPLETED  
- [ ] **PHASE 3: Core Services** - COMPLETED
- [ ] **PHASE 4: API Endpoints** - COMPLETED
- [ ] **PHASE 5: Security** - COMPLETED
- [ ] **PHASE 6: Performance** - COMPLETED
- [ ] **PHASE 7: Integration** - COMPLETED

**Overall Backend Status:**
- [ ] **BACKEND DEVELOPMENT COMPLETE**

---

## 🚀 **STARTING THE BACKEND SERVER**

### **From Root Directory (hand-font/)**
```bash
# Install all dependencies first
npm run install:all

# Start both frontend and backend simultaneously
npm run dev

# This will start:
# - Frontend: http://localhost:3000
# - Backend: http://localhost:5000
```

### **Individual Backend Start**
```bash
# Navigate to backend directory
cd backend/

# Install dependencies
npm install

# Start development server
npm run dev

# Backend will run on: http://localhost:5000
```

### **Database Commands**
```bash
# Navigate to backend directory
cd backend/

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Run migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

---

## 📝 **CRITICAL NOTES FOR AI AGENTS**

1. **ALWAYS work from the root directory** - this is a monorepo setup
2. **Follow the exact order** - each phase builds upon the previous one
3. **Test thoroughly** before marking tasks complete
4. **Use specified libraries** - don't reinvent the wheel
5. **Implement proper error handling** for all endpoints
6. **Follow RESTful API standards** and best practices
7. **Maintain TypeScript strict mode** - no `any` types
8. **Update checkboxes** after completing each task
9. **Document any deviations** from the original plan
10. **Ensure npm run dev starts both servers** from root directory

**Remember:** This is a production backend - security, performance, and reliability are paramount!

**File Structure Must Be Exact:** Follow the directory structure precisely as specified above. All controllers, services, and utilities must be placed in their designated folders.

**API Endpoints Must Follow RESTful Standards:** Use proper HTTP methods, status codes, and response formats.

---

## 🛠️ **COMPLETE TECHNOLOGY STACK SUMMARY**

### **Backend Technologies (Latest Versions)**
- **Runtime**: Node.js 22.0.0 (LTS)
- **Framework**: Express.js 5.0.0
- **Database**: PostgreSQL 17.0 + Prisma 5.10.0
- **Authentication**: Clerk + JWT
- **Security**: Helmet 8.0.0 + CORS + Rate Limiting
- **File Processing**: Multer 1.4.5 + Sharp 0.33.0
- **Validation**: Zod 3.23.0 + UUID 10.0.0

### **Development Tools**
- **Language**: TypeScript 5.5.0 (Strict mode)
- **Development**: Nodemon 3.1.0 + ts-node 10.9.1
- **Package Manager**: npm 10.8.0
- **Build Tool**: TypeScript compiler

### **Key Features**
- **RESTful API design**
- **Comprehensive security**
- **File upload & processing**
- **Font generation services**
- **User management**
- **Performance optimization**
- **Comprehensive logging**
