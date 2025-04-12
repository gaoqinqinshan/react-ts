"use client";

import useNextValue from "@/components/hooks/use-next-value";
import { cn } from "@/lib/utils";
import {
  IconContrastFilled,
  IconMoon,
  IconSunFilled,
} from "@tabler/icons-react";
import { motion, useAnimation } from "motion/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// 定义主题类型
type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const controlsSun = useAnimation();
  const controlsMoon = useAnimation();
  const controlsContrast = useAnimation();

  // 在服务器端和客户端一致的初始主题
  // 使用 'system' 作为默认值，客户端通过 useEffect 同步
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");

  useEffect(() => {
    setMounted(true);
    // 仅在客户端同步实际主题
    setCurrentTheme(theme as Theme);
  }, [theme]);

  useEffect(() => {
    if (!mounted) return;

    if (currentTheme === "system") {
      controlsSun.start("hidden");
      controlsContrast.start("system");
      controlsMoon.start("hidden");
    } else {
      controlsSun.start(currentTheme === "light" ? "sun" : "hidden");
      controlsMoon.start(currentTheme === "dark" ? "moon" : "hidden");
      controlsContrast.start("systemHidden");
    }
  }, [mounted, controlsContrast, controlsMoon, controlsSun, currentTheme]);

  const nextTheme = useNextValue(["light", "system", "dark"] as const, currentTheme);

  const iconVariants = {
    sun: { rotate: 0, scale: 1, opacity: 1 },
    moon: { rotate: 0, scale: 1, opacity: 1 },
    system: { rotate: 0, scale: 1, opacity: 1 },
    hidden: { scale: 0, opacity: 0, rotate: 180 },
    systemHidden: { scale: 0, opacity: 0 },
  };

  // 在未挂载时，使用默认图标（避免水合差异）
  const renderIcon = (themeValue: Theme) => {
    switch (themeValue) {
      case "light":
        return <IconSunFilled className="size-4" />;
      case "dark":
        return <IconMoon className="size-4" />;
      case "system":
      default:
        return <IconContrastFilled className="size-4" />;
    }
  };

  return (
    <button
      className="flex items-center gap-2 cursor-pointer group"
      onClick={() => setTheme(nextTheme)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ height: 24, width: 40 }}
        className={cn(
          "flex items-center bg-zinc-0 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/30 dark:ring-white/10 rounded-full shadow-inner dark:shadow-black/10 relative"
        )}
      >
        {!mounted ? (
          // 未挂载时，渲染默认图标（与服务器一致）
          <div
            className="absolute"
            style={{
              left: "12px", // 默认居中，表示 'system'
              top: "4px",
              height: "16px",
              width: "16px",
            }}
          >
            <IconContrastFilled className="size-4" />
          </div>
        ) : (
          // 挂载后，使用动画切换
          <motion.div
            animate={{
              x: currentTheme === "light" ? 4 : currentTheme === "system" ? 12 : 20,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            style={{ height: 16, width: 16 }}
            className={cn("rounded-full transition-all duration-300 ease-in-out relative")}
          >
            <motion.div
              style={{ height: 16, width: 16 }}
              className="absolute top-0 left-0"
              variants={iconVariants}
              initial="hidden"
              animate={controlsSun}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <IconSunFilled className="size-4" />
            </motion.div>
            <motion.div
              style={{ height: 16, width: 16 }}
              className="absolute top-0 left-0"
              variants={iconVariants}
              initial="system"
              animate={controlsContrast}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <IconContrastFilled className="size-4 dark:rotate-180" />
            </motion.div>
            <motion.div
              style={{ height: 16, width: 16 }}
              className="absolute top-0 left-0"
              variants={iconVariants}
              initial="hidden"
              animate={controlsMoon}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <IconMoon className="size-4" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </button>
  );
}