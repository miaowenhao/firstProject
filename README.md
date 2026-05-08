# firstProject

企业级 Node.js + Express 后端应用

## 功能特性

- Express 框架：快速、灵活的 Web 服务器
- 安全中间件：Helmet 安全头、CORS 跨域支持
- 日志系统：Winston 结构化日志，支持文件持久化
- 错误处理：统一的错误处理中间件和自定义 ApiError 类
- 环境配置：支持 development、production、test 环境
- 优雅关停：支持 SIGTERM 和 SIGINT 信号处理
- 代码规范：集成 ESLint 和 Prettier

## 技术栈

- **运行时**: Node.js
- **框架**: Express.js
- **安全**: Helmet, CORS
- **日志**: Winston, Morgan
- **代码质量**: ESLint, Prettier
- **开发工具**: Nodemon

## 快速开始

### 安装依赖

```bash
npm install
```

### 环境配置

复制 `.env.example` 为 `.env` 并根据需要修改配置：

```bash
cp .env.example .env
```

### 启动服务

```bash
# 开发模式
npm run dev

# 生产模式
npm start
```

## 项目结构

```
src/
├── app.js                 # Express 应用配置
├── server.js              # HTTP 服务器入口
├── config/
│   └── index.js           # 环境配置
├── controllers/
│   └── health.controller.js
├── middleware/
│   ├── error.middleware.js
│   └── requestLogger.middleware.js
├── routes/
│   └── v1/
│       ├── index.js
│       └── health.route.js
├── services/
│   └── health.service.js
└── utils/
    ├── ApiError.js
    └── logger.js
```

## API 文档

### 健康检查

**GET** `/api/v1/health`

响应示例：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "status": "ok",
    "uptime": 12345.67,
    "timestamp": "2026-05-08T10:30:00.000Z",
    "environment": "development"
  }
}
```

## 开发命令

| 命令 | 描述 |
|------|------|
| `npm start` | 启动生产服务器 |
| `npm run dev` | 启动开发服务器（热重载） |
| `npm run lint` | 运行 ESLint 检查 |
| `npm run lint:fix` | 自动修复 ESLint 问题 |
| `npm run format` | 运行 Prettier 格式化 |

## 许可证

MIT
