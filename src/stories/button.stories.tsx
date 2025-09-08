// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button'; // 确保路径与您的项目结构匹配
import { Heart } from 'lucide-react'; // 导入一个示例图标用于非加载状态的图标按钮

/**
 * Storybook Meta 配置，用于定义组件的元数据。
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button', // Storybook 中组件的分类标题
  component: Button, // 对应的 React 组件
  parameters: {
    layout: 'centered', // 在 Storybook 画布中居中显示组件
  },
  tags: ['autodocs'], // 启用 Storybook 自动生成文档
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'If true, a loading spinner will be displayed and the button will be disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the button will be disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: 'boolean',
      description: 'If true, the component will render as the Slot component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the button.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onClick: {
      action: 'clicked', // 为 onClick prop 自动创建 Storybook action
      description: 'Event handler for button click.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * 默认状态的按钮。
 */
export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'default',
    size: 'default',
    isLoading: true,
    disabled: false,
  },
};

/**
 * 加载中的主要按钮。
 */
export const PrimaryLoading: Story = {
  args: {
    ...Default.args, // 继承默认状态的 props
    children: 'Loading...',
    isLoading: true,
  },
};

/**
 * 加载中的次要按钮。
 */
export const SecondaryLoading: Story = {
  args: {
    ...Default.args,
    children: 'Processing...',
    variant: 'secondary',
    isLoading: true,
  },
};

/**
 * 加载中的危险操作按钮。
 */
export const DestructiveLoading: Story = {
  args: {
    ...Default.args,
    children: 'Deleting...',
    variant: 'destructive',
    isLoading: true,
  },
};

/**
 * 加载中的边框按钮。
 */
export const OutlineLoading: Story = {
  args: {
    ...Default.args,
    children: 'Saving...',
    variant: 'outline',
    isLoading: true,
  },
};

/**
 * 正常禁用的按钮。
 */
export const Disabled: Story = {
  args: {
    ...Default.args,
    children: 'Disabled',
    disabled: true,
  },
};

/**
 * 按钮被明确设置为禁用，同时处于加载状态。
 * 注意：`isLoading: true` 会自动禁用按钮。
 */
export const DisabledAndLoading: Story = {
  args: {
    ...Default.args,
    children: 'Disabled and Loading',
    isLoading: true,
    disabled: true,
  },
};

/**
 * 正常的图标按钮（非加载状态）。
 * 使用 `render` 函数来展示图标内容。
 */
export const IconButton: Story = {
  args: {
    size: 'icon',
    variant: 'ghost',
    isLoading: false,
  },
  render: (args) => (
    <Button {...args}>
      <Heart className="h-4 w-4" /> {/* 示例图标 */}
    </Button>
  ),
};

/**
 * 加载中的图标按钮。
 * 当 `isLoading` 为 true 时，`Loader2` 会自动替换或与 `children` 共存。
 * 通常，在加载状态下 `children` 可以为空或被替换。
 */
export const IconButtonLoading: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    isLoading: true,
  },
  render: (args) => (
    <Button {...args}>
      {/* 当 isLoading 为 true 时，可以不显示其他图标，Loader2 会自动显示 */}
      {args.isLoading ? null : <Heart className="h-4 w-4" />}
    </Button>
  ),
};