import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileCard } from '../components/ui/user-profile-card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserProfileCard> = {
  title: 'Components/UserProfileCard', // Storybook 导航中的标题
  component: UserProfileCard, // 关联的组件
  parameters: {
    // Optional parameter to center the component in the Storybook UI
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      control: 'text',
      description: 'The name of the user.',
    },
    email: {
      control: 'text',
      description: 'The email address of the user.',
    },
    onViewProfile: {
      action: 'viewProfileClicked', // Storybook 将自动捕获并显示此事件
      description: 'Callback when the "View Profile" button is clicked.',
    },
    // You can also add argTypes for props inherited from Card, if needed
    className: {
      control: 'text',
      description: 'Optional class name for the card container.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserProfileCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
/**
 * 默认的用户资料卡片，展示基本的用户信息。
 */
export const Default: Story = {
  args: {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
};

/**
 * 另一个用户资料卡片的示例，展示不同的用户数据。
 */
export const AnotherUser: Story = {
  args: {
    name: 'Jane Smith',
    email: 'jane.smith@company.io',
  },
};

/**
 * 带有点击事件处理器的用户资料卡片。点击 "View Profile" 按钮将触发一个 Storybook action。
 */
export const WithClickHandler: Story = {
  args: {
    name: 'Alice Johnson',
    email: 'alice.johnson@mail.org',
    onViewProfile: () => alert('Viewing Alice Johnson\'s profile!'), // 实际点击时会执行此函数
  },
};

/**
 * 带有自定义宽度的用户资料卡片，通过 `className` prop 调整样式。
 */
export const CustomWidth: Story = {
  args: {
    name: 'Robert Brown',
    email: 'robert.brown@email.net',
    className: 'w-[400px]', // TailwindCSS 类来设置宽度
  },
};