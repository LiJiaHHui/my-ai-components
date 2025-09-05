// button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react"; // 导入 Lucide React 的 Loader2 图标
import { cn } from "../../lib/utils"; // 假设您的 cn 工具函数路径是 @/lib/utils

/**
 * 定义按钮的变体样式。
 * 基于 shadcn/ui 的默认按钮变体。
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * 按钮组件的 Props 定义。
 * 继承了 HTMLButtonElement 的所有属性和按钮变体的属性。
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * 当为 true 时，按钮将渲染为 Slot 组件的子元素，而不是一个 `<button>` 元素。
   * 这允许将按钮的样式和行为应用于任何子组件。
   */
  asChild?: boolean;
  /**
   * 当为 true 时，按钮将显示一个旋转的加载图标，并禁用按钮。
   * @default false
   */
  isLoading?: boolean;
}

/**
 * 扩展后的 Button 组件。
 * 支持加载状态和透传 ref。
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"; // 根据 asChild 决定渲染的组件
    return (
      // <Comp
      //   className={cn(buttonVariants({ variant, size, className }),"flex items-center justify-center")}
      //   ref={ref}
      //   disabled={isLoading || props.disabled} // 如果 isLoading 为 true 或 props.disabled 为 true，则禁用按钮
      //   {...props}
      // >
      //   {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />} {/* 加载图标 */}
      //   {children}
      // </Comp>

      // ...existing code...
      // <Comp
      //   className={cn(buttonVariants({ variant, size, className }))}
      //   ref={ref}
      //   disabled={isLoading || props.disabled}
      //   {...props}
      // >
      //   <span className="flex items-center justify-center w-full">
      //     {isLoading && (
      //       <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      //     )}
      //     {children}
      //   </span>
      // </Comp>
// ...existing code...

<Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {children}
      </Comp>

    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };