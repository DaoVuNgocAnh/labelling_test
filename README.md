# Labelling Management System

Hệ thống quản lý nhân sự và tiến độ Labeling ảnh, gồm 2 phần chính:
- **Frontend:** React + TypeScript + Vite
- **Backend:** NestJS + Prisma + PostgreSQL
- **Docker:** Dùng để container hóa toàn bộ dự án

---

##  Cấu trúc thư mục
.
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── .env.example
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── docker-compose.yml
├── .env.example (cho docker-compose)
└── README.md
