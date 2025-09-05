# AI-Driven React Component Generator

This project showcases an innovative workflow for scaffolding React components using Artificial Intelligence. By providing a natural language description via a command-line script, it leverages the Google Gemini API to generate high-quality component code. The generated components are built with TypeScript, styled with Tailwind CSS, follow `shadcn/ui` conventions, and include a corresponding Storybook file for immediate visualization and testing.

## ✨ Features

-   **AI-Powered Generation**: Generate React components and Storybook stories from a single text prompt.
-   **Modern Tech Stack**: Built with Vite, React, TypeScript, and Tailwind CSS.
-   **`shadcn/ui` Architecture**: The AI is instructed to create components following the structure and best practices of `shadcn/ui`.
-   **Integrated with Storybook**: Automatically creates a `.stories.tsx` file for each component, enabling isolated development and visual testing.
-   **Streamlined Workflow**: Drastically reduces boilerplate and setup time, allowing developers to focus on complex logic and refinement.

## 🛠️ Tech Stack

-   **AI**: Google Gemini (`@google/generative-ai`)
-   **Framework**: React + Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS, `clsx`, `tailwind-merge`
-   **Component Workshop**: Storybook
-   **Scripting**: Node.js

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   A package manager (npm, yarn, or pnpm)
-   A Google Gemini API Key. You can obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/my-ai-components.git
    cd my-ai-components
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the project root and add your Gemini API key:
    ```
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
    ```

## usage

### 1. Generate a Component

Run the `gen:component` script with your component description in quotes. The AI will generate a component file in `src/components/ui` and a story file in `src/stories`.

```bash
npm run gen:component "A responsive card with an image, title, and a call-to-action button"
```

### 2. Run the Development Server

To see your components in a sample application, run the Vite dev server:

```bash
npm run dev
```

### 3. View in Storybook

To view, test, and interact with your generated components in isolation, run Storybook:

```bash
npm run storybook
```

This will open Storybook in your browser, usually at `http://localhost:6006`.


# AI 驱动的 React 组件生成器

本项目展示了一个创新的前端开发工作流，通过人工智能（AI）来自动化生成 React 组件。你只需通过命令行脚本提供一句自然语言描述，项目就会调用 Google Gemini API 生成高质量的组件代码。这些代码使用 TypeScript 编写，遵循 `shadcn/ui` 的设计规范和结构，并自动创建对应的 Storybook 故事文件，以便即时进行可视化和测试。

## ✨ 项目特色

-   **AI 驱动生成**：仅需一条文本指令，即可生成 React 组件及其 Storybook 故事文件。
-   **现代化技术栈**：基于 Vite、React、TypeScript 和 Tailwind CSS 构建。
-   **`shadcn/ui` 风格架构**：AI 被设定为遵循 `shadcn/ui` 的结构和最佳实践来创建组件。
-   **集成 Storybook**：为每个组件自动创建 `.stories.tsx` 文件，支持隔离开发和可视化测试。
-   **简化工作流程**：极大减少编写样板代码的时间，让开发者能更专注于核心业务逻辑和功能优化。

## 🛠️ 技术栈

-   **人工智能**: Google Gemini (`@google/generative-ai`)
-   **前端框架**: React + Vite
-   **编程语言**: TypeScript
-   **样式方案**: Tailwind CSS, `clsx`, `tailwind-merge`
-   **组件文档**: Storybook
-   **脚本环境**: Node.js

## 🚀 快速开始

### 环境准备

-   Node.js (建议 v18 或更高版本)
-   包管理工具 (npm, yarn, 或 pnpm)
-   一个 Google Gemini API 密钥。你可以从 [Google AI Studio](https://aistudio.google.com/app/apikey) 获取。

### 安装步骤

1.  **克隆仓库：**
    ```bash
    git clone https://github.com/your-username/my-ai-components.git
    cd my-ai-components
    ```

2.  **安装依赖：**
    ```bash
    npm install
    ```

3.  **配置环境变量：**
    在项目根目录下创建一个名为 `.env` 的文件，并填入你的 Gemini API 密钥：
    ```
    GEMINI_API_KEY="你的_GEMINI_API_KEY"
    ```

## 📖 使用方法

### 1. 生成组件

运行 `gen:component` 脚本，并将你的组件需求描述作为参数（用引号包裹）。AI 将在 `src/components/ui` 目录下生成组件文件，并在 `src/stories` 目录下生成故事文件。

```bash
npm run gen:component "一个响应式的卡片，包含图片、标题和一个操作按钮"
```

### 2. 启动开发服务器

如果你想在示例应用中查看组件效果，可以运行 Vite 开发服务器：

```bash
npm run dev
```

### 3. 在 Storybook 中查看

要独立查看、测试和交互你生成的组件，请运行 Storybook：

```bash
npm run storybook
```

这将在你的浏览器中打开 Storybook，地址通常是 `http://localhost:6006