# 🎨 Hand-Font Project

A full-stack application for generating and managing custom handwritten fonts with AI-powered tools. This project combines a Node.js/Express backend with a Next.js frontend to create a comprehensive font generation platform.

**✨ Developer Experience**: Start both servers with a single `npm run dev` command using concurrent execution.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git**
- **Database** (PostgreSQL recommended)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd hand-font
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Return to root
cd ..
```

### 3. Environment Setup

```bash
# Copy environment files
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### 4. Database Setup

```bash
# Navigate to backend
cd backend

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed database (if available)
npx prisma db seed

cd ..
```

### 5. Start Development Servers

```bash
# Start both servers with a single command
npm run dev
```

This will automatically start:
- **Backend server** on port 3001 (with nodemon for auto-reload)
- **Frontend server** on port 3000 (Next.js development server)

Both servers run concurrently using the `concurrently` package.

## 🖥️ Platform-Specific Setup

### Windows Setup (Primary)

#### Install Node.js and npm
1. **Download Node.js**: Visit [https://nodejs.org/](https://nodejs.org/)
2. **Choose LTS version**: Download the LTS (Long Term Support) version
3. **Run installer**: Execute the downloaded `.msi` file
4. **Follow setup wizard**: Accept defaults or customize as needed
5. **Verify installation**: Open Command Prompt or PowerShell:
   ```cmd
   node --version
   npm --version
   ```

#### Install Git
1. **Download Git**: Visit [https://git-scm.com/](https://git-scm.com/)
2. **Run installer**: Execute the downloaded `.exe` file
3. **Configuration options**:
   - Choose default editor (VS Code recommended)
   - Use Git from Windows Command Prompt
   - Use bundled OpenSSH
   - Use OpenSSL library
   - Checkout Windows-style, commit Unix-style line endings
   - Use Windows' default console window
   - Enable file system caching
4. **Verify installation**:
   ```cmd
   git --version
   ```

#### Install PostgreSQL
1. **Download PostgreSQL**: Visit [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
2. **Run installer**: Execute the downloaded `.exe` file
3. **Setup options**:
   - Installation directory: `C:\Program Files\PostgreSQL\[version]\`
   - Data directory: `C:\Program Files\PostgreSQL\[version]\data\`
   - Password: Set a strong password for `postgres` user
   - Port: `5432` (default)
   - Locale: `Default locale`
4. **Install pgAdmin**: Include pgAdmin 4 for database management
5. **Create database**:
   ```cmd
   # Using psql command line
   psql -U postgres -h localhost
   CREATE DATABASE hand_font_db;
   \q
   
   # Or using pgAdmin 4 GUI
   ```

#### Windows-Specific Commands
```cmd
# Start PostgreSQL service
net start postgresql-x64-[version]

# Stop PostgreSQL service
net stop postgresql-x64-[version]

# Check service status
sc query postgresql-x64-[version]

# Kill process using port
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Linux Setup (Ubuntu/Debian)

#### Install Node.js and npm
```bash
# Update package list
sudo apt update

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version

# Install build tools (if needed)
sudo apt-get install -y build-essential
```

#### Install Git
```bash
sudo apt install git

# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Install PostgreSQL
```bash
# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Check status
sudo systemctl status postgresql

# Create database user
sudo -u postgres createuser --interactive
sudo -u postgres createdb hand_font_db

# Set password for postgres user
sudo -u postgres psql
ALTER USER postgres PASSWORD 'your_password_here';
\q
```

#### Linux-Specific Commands
```bash
# Check PostgreSQL status
sudo systemctl status postgresql

# Restart PostgreSQL
sudo systemctl restart postgresql

# View logs
sudo tail -f /var/log/postgresql/postgresql-[version]-main.log

# Kill process using port
lsof -i :3000
kill -9 <PID>
```

### macOS Setup

#### Install Homebrew (if not installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add Homebrew to PATH (if needed)
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

#### Install Node.js and npm
```bash
# Install Node.js
brew install node

# Verify installation
node --version
npm --version

# Update Homebrew and Node.js
brew update
brew upgrade node
```

#### Install Git
```bash
brew install git

# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Install PostgreSQL
```bash
# Install PostgreSQL
brew install postgresql

# Start PostgreSQL service
brew services start postgresql

# Check status
brew services list | grep postgresql

# Create database
createdb hand_font_db

# Access PostgreSQL
psql postgres
```

#### macOS-Specific Commands
```bash
# Check PostgreSQL status
brew services list | grep postgresql

# Restart PostgreSQL
brew services restart postgresql

# Stop PostgreSQL
brew services stop postgresql

# Kill process using port
lsof -i :3000
kill -9 <PID>
```

## 🔧 Development Commands

### Root Commands
```bash
# 🚀 MAIN COMMAND - Start both servers
npm run dev

# Individual server commands (if needed)
npm run dev:server    # Start only backend server
npm run dev:client    # Start only frontend server

# Database commands
npm run db:generate   # Generate Prisma client
npm run db:push       # Push schema to database
npm run db:migrate    # Run database migrations
npm run db:studio     # Open Prisma Studio

# Other commands (if implemented)
npm run install:all   # Install all dependencies
npm run test:all      # Run tests for all packages
npm run build:all     # Build all packages
npm run lint:all      # Lint all packages
```

### Backend Commands
```bash
cd backend

# Development
npm run dev          # Start development server with nodemon
npm run build        # Build for production
npm start            # Start production server

# Database
npx prisma generate  # Generate Prisma client
npx prisma migrate dev # Run migrations
npx prisma studio    # Open Prisma Studio
npx prisma db seed  # Seed database
npx prisma db push  # Push schema to database

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
```

### Frontend Commands
```bash
cd frontend

# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues

# Type checking
npm run type-check   # Run TypeScript type checking
```

## 🌍 Environment Variables

### Root `.env`
```env
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/hand_font_db
```

### Backend `.env`
```env
PORT=3001
DATABASE_URL=postgresql://username:password@localhost:5432/hand_font_db
JWT_SECRET=your-jwt-secret-here
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

### Frontend `.env`
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=Hand-Font
NEXT_PUBLIC_ENVIRONMENT=development
```

## 📁 Project Structure

```
hand-font/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   │   ├── font.controller.ts
│   │   │   └── user.controller.ts
│   │   ├── routes/         # API routes
│   │   │   ├── auth.routes.ts
│   │   │   ├── font.routes.ts
│   │   │   ├── health.routes.ts
│   │   │   └── user.routes.ts
│   │   ├── services/       # Business logic
│   │   │   ├── font.service.ts
│   │   │   └── storage.service.ts
│   │   ├── prisma/         # Database schema
│   │   └── utils/          # Utility functions
│   │       ├── logger.ts
│   │       ├── rateLimiter.ts
│   │       └── verifyHuman.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/                # Next.js frontend
│   ├── src/
│   │   ├── app/            # App router pages
│   │   │   ├── (guest)/    # Guest routes
│   │   │   │   ├── export/
│   │   │   │   ├── generate/
│   │   │   │   ├── preview/
│   │   │   │   └── page.tsx
│   │   │   ├── (pro)/      # Pro user routes
│   │   │   │   ├── dashboard/
│   │   │   │   └── fonts/
│   │   │   ├── auth/       # Authentication
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/     # React components
│   │   │   ├── CanvasBox.tsx
│   │   │   ├── ExportButton.tsx
│   │   │   ├── PreviewCard.tsx
│   │   │   ├── ProBadge.tsx
│   │   │   └── Toolbar.tsx
│   │   ├── hooks/          # Custom hooks
│   │   │   ├── useCanvasStore.ts
│   │   │   └── useFontStore.ts
│   │   └── lib/            # Utility libraries
│   │       ├── api.ts
│   │       └── fontHelpers.ts
│   ├── public/             # Static assets
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
├── prisma/                  # Database schema
│   └── schema.prisma
├── package.json             # Root package.json
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

#### Database Connection Issues
```bash
# Windows
net start postgresql-x64-[version]

# Linux
sudo systemctl restart postgresql

# macOS
brew services restart postgresql
```

#### Node Modules Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Prisma Issues
```bash
# Reset Prisma
npx prisma migrate reset
npx prisma generate
npx prisma db push

# Check database connection
npx prisma db pull
```

#### Next.js Build Issues
```bash
# Clear Next.js cache
rm -rf .next
rm -rf out

# Reinstall dependencies
npm install

# Rebuild
npm run build
```

#### TypeScript Issues
```bash
# Clear TypeScript cache
rm -rf *.tsbuildinfo

# Reinstall TypeScript
npm install typescript

# Check TypeScript version
npx tsc --version
```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use strong, unique passwords for database
- Rotate JWT secrets regularly
- Use environment-specific configurations

### Database Security
- Use strong database passwords
- Limit database access to application only
- Enable SSL connections in production
- Regular database backups

### API Security
- Implement rate limiting
- Use CORS properly
- Validate all inputs
- Implement proper authentication

## 🚀 Deployment

### Production Environment
```bash
# Build frontend
cd frontend
npm run build

# Build backend
cd ../backend
npm run build

# Set production environment
export NODE_ENV=production
export DATABASE_URL=your_production_db_url

# Start production server
npm start
```

### Docker Deployment
```dockerfile
# Example Dockerfile for backend
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

## 📚 Additional Resources

### Documentation
- [Node.js Documentation](https://nodejs.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Tools & Extensions
- **VS Code Extensions**:
  - Prisma
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint

### Community & Support
- [Stack Overflow](https://stackoverflow.com/)
- [GitHub Issues](https://github.com/your-repo/hand-font/issues)
- [Discord Community](https://discord.gg/your-community)

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Standards
- Follow existing code style
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed
- Ensure all tests pass

### Pull Request Guidelines
- Clear description of changes
- Screenshots for UI changes
- Test coverage information
- Breaking changes documented
- Related issue references

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help
1. Check the [Issues](https://github.com/your-repo/hand-font/issues) page
2. Search existing issues for similar problems
3. Create a new issue with detailed information:
   - Operating system and version
   - Node.js and npm versions
   - Error messages and stack traces
   - Steps to reproduce the issue
   - Expected vs actual behavior

### Contact Information
- **Project Maintainer**: [Your Name](mailto:your.email@example.com)
- **GitHub Issues**: [Create Issue](https://github.com/your-repo/hand-font/issues/new)
- **Discord**: [Join Community](https://discord.gg/your-community)

## 🎯 Project Goals

### Current Features
- Font generation from handwritten samples
- User authentication and management
- Font preview and export capabilities
- Pro user dashboard
- Responsive web interface

### Future Roadmap
- AI-powered font optimization
- Multiple font format support
- Collaborative font editing
- Mobile applications
- API for third-party integrations

---

**Happy coding! 🎉**

*Built with ❤️ using Next.js, Node.js, and Prisma*
