# Database Development Tasks - HandFont App

## 📋 **LATEST VERSION INFORMATION (Updated: 2025)**

**Key Technology Updates:**
- **PostgreSQL**: 17.0 (Latest major)
- **Prisma**: 5.10.0 (Latest stable)
- **@prisma/client**: 5.10.0 (Latest stable)
- **Node.js**: 22.0.0 (Latest LTS)
- **TypeScript**: 5.5.0 (Latest stable)

## 🎯 **AI AGENT INSTRUCTIONS - READ CAREFULLY**

**CRITICAL RULES TO FOLLOW:**
1. **Complete tasks in EXACT order** - do not skip or reorder tasks
2. **Mark checkboxes as done** after completing each task/subtask
3. **Follow production development workflow** - schema design first, then implementation, then optimization
4. **Use Prisma ORM** - do not create raw SQL unless absolutely necessary
5. **Test each database operation** before moving to next task
6. **Work from root directory** - this is a monorepo setup
7. **Use TypeScript strictly** - no `any` types allowed
8. **Follow database normalization principles** and best practices

---

## 🏗️ **PROJECT STRUCTURE & SETUP**

### **Database Directory Structure (backend/prisma/)**
```
backend/prisma/
├── schema.prisma (Main database schema)
├── migrations/ (Database migration files)
├── seed.ts (Database seeding script)
└── .env (Database environment variables)
```

### **Database Configuration Files**
```
backend/
├── .env (Environment variables)
├── .env.example (Environment template)
└── src/
    └── config/
        └── database.ts (Database connection config)
```

---

## 📚 **RESOURCES & DEPENDENCIES**

### **Database Dependencies (backend/package.json)**
```json
{
  "dependencies": {
    "prisma": "^5.10.0",
    "@prisma/client": "^5.10.0",
    "postgresql": "^17.0.0"
  },
  "devDependencies": {
    "prisma": "^5.10.0"
  }
}
```

### **Environment Variables (.env)**
```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/handfont_db"
DATABASE_HOST="localhost"
DATABASE_PORT="5432"
DATABASE_NAME="handfont_db"
DATABASE_USER="username"
DATABASE_PASSWORD="password"

# Prisma Configuration
PRISMA_GENERATE_DATAPROXY="false"
PRISMA_CLIENT_ENGINE_TYPE="binary"
```

---

## 🚀 **PHASE 1: DATABASE DESIGN & SCHEMA**

### **Task 1: Database Schema Design**
- [ ] 1.1 Design User table structure
- [ ] 1.2 Design Font table structure
- [ ] 1.3 Design FontCapture table structure
- [ ] 1.4 Design UserSettings table structure
- [ ] 1.5 Design FontAnalytics table structure
- [ ] 1.6 Plan table relationships and foreign keys
- [ ] 1.7 Design database indexes for performance

### **Task 2: Prisma Schema Implementation**
- [ ] 2.1 Navigate to backend directory: `cd backend/`
- [ ] 2.2 Initialize Prisma: `npx prisma init`
- [ ] 2.3 Create User model in schema.prisma
- [ ] 2.4 Create Font model in schema.prisma
- [ ] 2.5 Create FontCapture model in schema.prisma
- [ ] 2.6 Create UserSettings model in schema.prisma
- [ ] 2.7 Create FontAnalytics model in schema.prisma
- [ ] 2.8 Set up proper relationships between models

### **Task 3: Database Models Definition**
- [ ] 3.1 Define User model with all required fields
- [ ] 3.2 Define Font model with font metadata
- [ ] 3.3 Define FontCapture model for drawing data
- [ ] 3.4 Define UserSettings model for preferences
- [ ] 3.5 Define FontAnalytics model for usage tracking
- [ ] 3.6 Add proper field types and constraints
- [ ] 3.7 Implement soft delete functionality

---

## 🔧 **PHASE 2: DATABASE IMPLEMENTATION**

### **Task 4: Database Connection Setup**
- [ ] 4.1 Create database configuration file (src/config/database.ts)
- [ ] 4.2 Set up environment variables for database connection
- [ ] 4.3 Configure Prisma client initialization
- [ ] 4.4 Implement database connection pooling
- [ ] 4.5 Add connection error handling
- [ ] 4.6 Test database connection

### **Task 5: Database Migration System**
- [ ] 5.1 Create initial migration: `npx prisma migrate dev --name init`
- [ ] 5.2 Verify migration files are generated
- [ ] 5.3 Test migration rollback functionality
- [ ] 5.4 Create migration for any schema changes
- [ ] 5.5 Document migration history
- [ ] 5.6 Test migration on clean database

### **Task 6: Prisma Client Generation**
- [ ] 6.1 Generate Prisma client: `npx prisma generate`
- [ ] 6.2 Verify client types are generated correctly
- [ ] 6.3 Test Prisma client import in TypeScript
- [ ] 6.4 Set up client export in database config
- [ ] 6.5 Test basic database operations
- [ ] 6.6 Verify type safety of generated client

---

## 🎯 **PHASE 3: CORE DATABASE OPERATIONS**

### **Task 7: User Management Operations**
- [ ] 7.1 Implement user creation (CREATE)
- [ ] 7.2 Implement user retrieval (READ)
- [ ] 7.3 Implement user update (UPDATE)
- [ ] 7.4 Implement user deletion (DELETE)
- [ ] 7.5 Add user search and filtering
- [ ] 7.6 Implement user pagination
- [ ] 7.7 Test all user CRUD operations

### **Task 8: Font Management Operations**
- [ ] 8.1 Implement font creation (CREATE)
- [ ] 8.2 Implement font retrieval (READ)
- [ ] 8.3 Implement font update (UPDATE)
- [ ] 8.4 Implement font deletion (DELETE)
- [ ] 8.5 Add font search and filtering
- [ ] 8.6 Implement font pagination
- [ ] 8.7 Test all font CRUD operations

### **Task 9: Font Capture Operations**
- [ ] 9.1 Implement font capture data storage
- [ ] 9.2 Implement capture data retrieval
- [ ] 9.3 Implement capture data update
- [ ] 9.4 Implement capture data deletion
- [ ] 9.5 Add capture data validation
- [ ] 9.6 Implement capture data compression
- [ ] 9.7 Test all capture CRUD operations

---

## 🔒 **PHASE 4: DATABASE SECURITY & VALIDATION**

### **Task 10: Data Validation & Constraints**
- [ ] 10.1 Add field-level validation constraints
- [ ] 10.2 Implement unique constraints where needed
- [ ] 10.3 Add check constraints for data integrity
- [ ] 10.4 Implement referential integrity constraints
- [ ] 10.5 Add cascade delete rules
- [ ] 10.6 Test constraint violations
- [ ] 10.7 Verify data integrity

### **Task 11: Database Security Implementation**
- [ ] 11.1 Implement row-level security (RLS)
- [ ] 11.2 Add user-based access control
- [ ] 11.3 Implement data encryption for sensitive fields
- [ ] 11.4 Add audit logging for data changes
- [ ] 11.5 Implement backup and recovery procedures
- [ ] 11.6 Test security measures
- [ ] 11.7 Verify access control

### **Task 12: Input Sanitization & Validation**
- [ ] 12.1 Implement input validation at database level
- [ ] 12.2 Add SQL injection prevention
- [ ] 12.3 Implement parameterized queries
- [ ] 12.4 Add input sanitization
- [ ] 12.5 Test malicious input scenarios
- [ ] 12.6 Verify security measures

---

## 📊 **PHASE 5: DATABASE PERFORMANCE & OPTIMIZATION**

### **Task 13: Database Indexing**
- [ ] 13.1 Create primary key indexes
- [ ] 13.2 Add foreign key indexes
- [ ] 13.3 Create composite indexes for common queries
- [ ] 13.4 Add unique indexes where needed
- [ ] 13.5 Implement partial indexes for filtered queries
- [ ] 13.6 Test index performance
- [ ] 13.7 Monitor index usage

### **Task 14: Query Optimization**
- [ ] 14.1 Optimize SELECT queries
- [ ] 14.2 Optimize INSERT operations
- [ ] 14.3 Optimize UPDATE operations
- [ ] 14.4 Optimize DELETE operations
- [ ] 14.5 Implement query caching
- [ ] 14.6 Add query performance monitoring
- [ ] 14.7 Test query performance

### **Task 15: Database Monitoring & Maintenance**
- [ ] 15.1 Set up database performance monitoring
- [ ] 15.2 Implement slow query logging
- [ ] 15.3 Add database health checks
- [ ] 15.4 Implement automated maintenance tasks
- [ ] 15.5 Set up backup scheduling
- [ ] 15.6 Monitor database size and growth
- [ ] 15.7 Implement cleanup procedures

---

## 🧪 **PHASE 6: TESTING & QUALITY ASSURANCE**

### **Task 16: Database Testing**
- [ ] 16.1 Write unit tests for database operations
- [ ] 16.2 Test all CRUD operations
- [ ] 16.3 Test constraint violations
- [ ] 16.4 Test error handling scenarios
- [ ] 16.5 Test performance under load
- [ ] 16.6 Test data integrity
- [ ] 16.7 Test backup and recovery

### **Task 17: Data Seeding & Testing**
- [ ] 17.1 Create seed data for development
- [ ] 17.2 Implement automated seeding scripts
- [ ] 17.3 Create test data for different scenarios
- [ ] 17.4 Test with large datasets
- [ ] 17.5 Test edge cases and boundary conditions
- [ ] 17.6 Verify seed data integrity
- [ ] 17.7 Test data cleanup procedures

### **Task 18: Integration Testing**
- [ ] 18.1 Test database integration with backend services
- [ ] 18.2 Test API endpoints with database operations
- [ ] 18.3 Test error handling and rollback scenarios
- [ ] 18.4 Test concurrent access scenarios
- [ ] 18.5 Test transaction handling
- [ ] 18.6 Test connection pooling
- [ ] 18.7 Test failover scenarios

---

## 🚀 **PHASE 7: PRODUCTION & DEPLOYMENT**

### **Task 19: Production Database Setup**
- [ ] 19.1 Set up production database instance
- [ ] 19.2 Configure production environment variables
- [ ] 19.3 Set up production database security
- [ ] 19.4 Configure production backup procedures
- [ ] 19.5 Set up production monitoring
- [ ] 19.6 Test production database connection
- [ ] 19.7 Verify production security measures

### **Task 20: Database Migration to Production**
- [ ] 20.1 Plan production migration strategy
- [ ] 20.2 Create production migration scripts
- [ ] 20.3 Test migration on staging environment
- [ ] 20.4 Execute production migration
- [ ] 20.5 Verify production data integrity
- [ ] 20.6 Test production database operations
- [ ] 20.7 Document production setup

### **Task 21: Production Monitoring & Maintenance**
- [ ] 21.1 Set up production performance monitoring
- [ ] 21.2 Implement production alerting
- [ ] 21.3 Set up automated production backups
- [ ] 21.4 Implement production maintenance procedures
- [ ] 21.5 Set up production disaster recovery
- [ ] 21.6 Monitor production database health
- [ ] 21.7 Document production procedures

---

## ✅ **COMPLETION CHECKLIST**

**Database Development Status:**
- [ ] **PHASE 1: Database Design** - COMPLETED
- [ ] **PHASE 2: Database Implementation** - COMPLETED  
- [ ] **PHASE 3: Core Operations** - COMPLETED
- [ ] **PHASE 4: Security** - COMPLETED
- [ ] **PHASE 5: Performance** - COMPLETED
- [ ] **PHASE 6: Testing** - COMPLETED
- [ ] **PHASE 7: Production** - COMPLETED

**Overall Database Status:**
- [ ] **DATABASE DEVELOPMENT COMPLETE**

---

## 🚀 **DATABASE COMMANDS & OPERATIONS**

### **From Root Directory (hand-font/)**
```bash
# Navigate to backend directory
cd backend/

# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Run migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio

# Reset database (development only)
npx prisma migrate reset

# Deploy to production
npx prisma migrate deploy
```

### **Database Connection Testing**
```bash
# Test database connection
npx prisma db pull

# View database schema
npx prisma format

# Validate schema
npx prisma validate

# Generate types
npx prisma generate
```

### **Environment Setup**
```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env

# Load environment variables
source .env
```

---

## 📝 **CRITICAL NOTES FOR AI AGENTS**

1. **ALWAYS work from the root directory** - this is a monorepo setup
2. **Follow the exact order** - each phase builds upon the previous one
3. **Test thoroughly** before marking tasks complete
4. **Use Prisma ORM** - don't create raw SQL unless absolutely necessary
5. **Implement proper error handling** for all database operations
6. **Follow database normalization principles** and best practices
7. **Maintain TypeScript strict mode** - no `any` types
8. **Update checkboxes** after completing each task
9. **Document any deviations** from the original plan
10. **Ensure database works with npm run dev** from root directory

**Remember:** This is a production database - data integrity, security, and performance are paramount!

**File Structure Must Be Exact:** Follow the directory structure precisely as specified above. All schema files, migrations, and configurations must be placed in their designated folders.

**Database Operations Must Be Safe:** Always use transactions for multi-step operations, implement proper error handling, and ensure data consistency.

**Security First:** Implement proper access controls, input validation, and data encryption for sensitive information.

---

## 🛠️ **COMPLETE TECHNOLOGY STACK SUMMARY**

### **Database Technologies (Latest Versions)**
- **Database Engine**: PostgreSQL 17.0
- **ORM**: Prisma 5.10.0 + @prisma/client 5.10.0
- **Runtime**: Node.js 22.0.0 (LTS)
- **Language**: TypeScript 5.5.0 (Strict mode)

### **Database Features**
- **Schema Management**: Prisma migrations
- **Connection Pooling**: Built-in with Prisma
- **Security**: Row-Level Security (RLS)
- **Performance**: Advanced indexing
- **Validation**: Prisma schema validation

### **Development Tools**
- **Database Studio**: Prisma Studio
- **Migration Tools**: Prisma CLI
- **Package Manager**: npm 10.8.0
- **Environment**: Docker ready

### **Key Features**
- **Type-safe database operations**
- **Automatic migrations**
- **Connection pooling**
- **Performance monitoring**
- **Backup & recovery**
- **Security compliance**
