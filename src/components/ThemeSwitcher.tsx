import { useState, useEffect, Fragment } from "react";
import {
  DesktopComputerIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { Theme } from "../models/theme";

export const ThemeSwitcher = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
  }, []);

  const handleThemeChange = (theme: Theme) => {
    let isDark: boolean;
    if (theme === Theme.system) {
      localStorage.removeItem("theme");
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      localStorage.theme = theme;
      isDark = theme === Theme.dark;
    }
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent py-2">
          {isDarkMode ? (
            <SunIcon
              className="h-7 w-7 text-teal-500 hover:text-teal-300"
              aria-hidden="true"
            />
          ) : (
            <MoonIcon
              className="h-7 w-7 text-teal-500 hover:text-teal-300"
              aria-hidden="true"
            />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleThemeChange(Theme.light)}
                className={`${
                  active
                    ? "bg-teal-700 dark:bg-gray-700 text-white"
                    : "text-gray-900 dark:text-gray-200"
                } group flex w-full items-center rounded-t-md px-2 py-2 text-sm`}
              >
                <SunIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Light
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleThemeChange(Theme.dark)}
                className={`${
                  active
                    ? "bg-teal-700 dark:bg-gray-700 text-white"
                    : "text-gray-900 dark:text-gray-200"
                } group flex w-full items-center px-2 py-2 text-sm`}
              >
                <MoonIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Dark
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleThemeChange(Theme.system)}
                className={`${
                  active
                    ? "bg-teal-700 dark:bg-gray-700 text-white"
                    : "text-gray-900 dark:text-gray-200"
                } group flex w-full items-center rounded-b-md px-2 py-2 text-sm`}
              >
                <DesktopComputerIcon
                  className="mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                System
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ThemeSwitcher;
