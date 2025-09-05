import fs from 'fs/promises';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 从环境变量加载 Gemini API Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 定义组件的目标路径
const componentsDir = path.resolve(process.cwd(), 'src/components/ui');
const storiesDir = path.resolve(process.cwd(), 'src/stories');

// 主生成函数
async function generateComponent(description) {
  console.log(`[AI] 接收到需求: "${description}"`);
  console.log('[AI] 正在思考，请稍候...');

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const prompt = [
      {
        role: 'system',
        content: `你是一个高级前端开发专家，精通 React, TypeScript, shadcn/ui, TailwindCSS 和 Storybook。
        你的任务是根据用户需求，生成符合以下规范的组件代码和 Storybook 故事文件：
        1.  **组件代码**:
            - 使用 TypeScript。
            - 必须基于 shadcn/ui 的风格和结构。如果 shadcn/ui 有类似的基础组件（如 Button, Card），直接使用 \`npx shadcn-ui@latest add [component]\` 命令获取基础代码，然后在此基础上进行扩展。你的输出应该展示扩展后的最终代码。
            - Props 必须有详细的 JSDoc 注释，这对于 Storybook 自动生成文档至关重要。
            - 使用 \`React.forwardRef\` 来传递 ref。
            - 文件名应为小写。
        2.  **Storybook 故事文件**:
            - 文件名应为 \`[ComponentName].stories.tsx\`。
            - 必须包含一个默认的导出 (meta) 和至少一个具名导出 (story)。
            - Meta 对象应包含 title (格式为 'Components/[ComponentName]') 和 component。
            - Args 应在 story 中提供，并有清晰的示例。
            - 对于有多种变体 (variants) 的组件，应展示多个 story 来体现不同状态。
        你的输出应该是两个独立的 markdown 代码块，一个用于组件文件，一个用于故事文件，并明确标注文件名。`
      },
      {
        role: 'user',
        content: description,
      },
    ];

    // Gemini API 只接受字符串 prompt
    const messages = prompt.map(m => m.content).join('\n\n');
    const result = await model.generateContent(messages);
    const content = result.response.text();

    console.log('[AI] 已生成代码，正在解析...');

// console.log('[AI] 返回内容:\n', content);


    // 解析并写入文件
    await parseAndWriteFiles(content);

  } catch (error) {
    console.error('[AI] 调用 Gemini API 时出错:', error);
  }
}

// 解析 AI 返回的内容并写入文件
async function parseAndWriteFiles(content) {
  // const componentRegex = /```tsx\s*\/\/\s*(.*?\.tsx)\s*([\s\S]*?)```/g;
const componentRegex = /###\s*`([^`]+\.tsx)`\s*```(?:typescript|tsx)?\s*([\s\S]*?)```/gi;
  // const componentRegex = /```tsx\s*\/\/\s*(.*?\.tsx)\s*([\s\S]*?)```/gi;
  let match;
  // console.log('--------------------------------------------------------------',componentRegex.exec(content))
  // console.log('--------------------------------------------------------------',content)
//   while ((match = componentRegex.exec(content)) !== null) {
//     console.log('--------------------------------------------------------------jin来来来')
//     const fileName = match[1].trim();
//     let fileContent = match[2].trim();
// console.log('--------------------------------------------------------------',fileName)
// console.log('--------------------------------------------------------------',fileContent)
//     let targetDir = '';
//     if (fileName.endsWith('.stories.tsx')) {
//       targetDir = storiesDir;
//     } else if (fileName.endsWith('.tsx')) {
//       targetDir = componentsDir;
//     }

//     if (targetDir) {
//       // 确保目录存在
//       await fs.mkdir(targetDir, { recursive: true });

//       const filePath = path.join(targetDir, fileName);

//       // 如果是组件文件，移除 shadcn/ui 的 add 命令提示
//       if (!fileName.endsWith('.stories.tsx')) {
//           fileContent = fileContent.replace(/npx shadcn-ui@latest add \w+/g, '').trim();
//       }

//       await fs.writeFile(filePath, fileContent);
//       console.log(`[FS] 成功写入文件: ${filePath}`);
//     }
//   }
// 2222while ((match = componentRegex.exec(content)) !== null) {


//   // 只保留文件名（去掉路径），并统一为小写
//   let fileName = path.basename(match[1].trim()).toLowerCase();
//   let fileContent = match[2].trim();

//   let targetDir = '';
//   if (fileName.endsWith('.stories.tsx')) {
//     targetDir = storiesDir;
//   } else if (fileName.endsWith('.tsx')) {
//     targetDir = componentsDir;
//   }

//   if (targetDir) {
//     await fs.mkdir(targetDir, { recursive: true });
//     const filePath = path.join(targetDir, fileName);
//     if (!fileName.endsWith('.stories.tsx')) {
//       fileContent = fileContent.replace(/npx shadcn-ui@latest add \w+/g, '').trim();
//     }
//     await fs.writeFile(filePath, fileContent);
//     console.log(`[FS] 成功写入文件: ${filePath}`);
//   }
// }

while ((match = componentRegex.exec(content)) !== null) {
  let fileName = match[1].trim().toLowerCase();
  let fileContent = match[2].trim();

  let targetDir = '';
  if (fileName.endsWith('.stories.tsx')) {
    targetDir = storiesDir;
  } else if (fileName.endsWith('.tsx')) {
    targetDir = componentsDir;
  }

  if (targetDir) {
    await fs.mkdir(targetDir, { recursive: true });
    const filePath = path.join(targetDir, fileName);
    if (!fileName.endsWith('.stories.tsx')) {
      fileContent = fileContent.replace(/npx shadcn-ui@latest add \w+/g, '').trim();
    }
    await fs.writeFile(filePath, fileContent);
    console.log(`[FS] 成功写入文件: ${filePath}`);
  }
}
}

// 从命令行参数获取需求
const userPrompt = process.argv[2];
if (!userPrompt) {
  console.error('错误: 请提供组件描述。');
  console.log('用法: node scripts/generate-component.mjs "你的组件需求"');
  process.exit(1);
}

generateComponent(userPrompt);