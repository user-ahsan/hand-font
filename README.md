# 🎨 Hand-Font Project

A full-stack application for generating and managing custom handwritten fonts with AI-powered tools.

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
# Start backend server (in one terminal)
cd backend
npm run dev

# Start frontend server (in another terminal)
cd frontend
npm run dev
```

## 🖥️ Platform-Specific Setup

### Linux (Ubuntu/Debian)

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
```

#### Install Git
```bash
sudo apt install git
```

#### Install PostgreSQL
```bash
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database user
sudo -u postgres createuser --interactive
sudo -u postgres createdb hand_font_db
```

### macOS

#### Install Homebrew (if not installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install Node.js and npm
```bash
# Install Node.js
brew install node

# Verify installation
node --version
npm --version
```

#### Install Git
```bash
brew install git
```

#### Install PostgreSQL
```bash
brew install postgresql

# Start PostgreSQL service
brew services start postgresql

# Create database
createdb hand_font_db
```

### Windows

#### Install Node.js and npm
1. Download Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Run the installer and follow the setup wizard
3. Verify installation in Command Prompt:
```cmd
node --version
npm --version
```

#### Install Git
1. Download Git from [https://git-scm.com/](https://git-scm.com/)
2. Run the installer and follow the setup wizard
3. Verify installation:
```cmd
git --version
```

#### Install PostgreSQL
1. Download PostgreSQL from [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
2. Run the installer and follow the setup wizard
3. Remember the password you set for the postgres user
4. Create database using pgAdmin or command line:
```cmd
createdb hand_font_db
```

## 🔧 Development Commands

### Backend Commands

```bash
cd backend

# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server

# Database
npx prisma generate  # Generate Prisma client
npx prisma migrate dev # Run migrations
npx prisma studio    # Open Prisma Studio
npx prisma db seed  # Seed database

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

### Root Commands

```bash
# Install all dependencies
npm run install:all

# Run tests for all packages
npm run test:all

# Build all packages
npm run build:all

# Lint all packages
npm run lint:all
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
```

### Frontend `.env`
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=Hand-Font
```

## 📁 Project Structure

```
hand-font/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── prisma/         # Database schema
│   │   └── utils/          # Utility functions
│   ├── package.json
│   └── tsconfig.json
├── frontend/                # Next.js frontend
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utility libraries
│   ├── package.json
│   └── tsconfig.json
├── prisma/                  # Database schema
├── package.json             # Root package.json
└── README.md
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port
lsof -i :3000    # macOS/Linux
netstat -ano | findstr :3000    # Windows

# Kill process
kill -9 <PID>    # macOS/Linux
taskkill /PID <PID> /F    # Windows
```

#### Database Connection Issues
```bash
# Check PostgreSQL status
sudo systemctl status postgresql    # Linux
brew services list | grep postgresql    # macOS

# Restart PostgreSQL
sudo systemctl restart postgresql    # Linux
brew services restart postgresql    # macOS
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
```

## 📚 Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/hand-font/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

**Happy coding! 🎉**
