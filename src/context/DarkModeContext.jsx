import { useEffect, useState, createContext, useContext } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const userThemePreference = window.matchMedia(
		"(prefers-color-scheme:dark)"
	).matches;

	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		"isDarkMode",
		userThemePreference
	);

	const toggleDarkMode = () => setIsDarkMode((isDark) => !isDark);

	useEffect(() => {
		const userThemePreference = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		setIsDarkMode(userThemePreference);
	}, [setIsDarkMode]);

	useEffect(
		function () {
			if (isDarkMode) {
				document.documentElement.classList.add("dark");
				document.documentElement.classList.remove("light");
			} else {
				document.documentElement.classList.add("light");
				document.documentElement.classList.remove("dark");
			}
		},
		[isDarkMode]
	);

	return (
		<DarkModeContext.Provider value={{ toggleDarkMode, isDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

function useDarkMode() {
	const context = useContext(DarkModeContext);

	if (context === undefined)
		throw new Error("Dark mode context was used outside of Dark Mode Provider");
	return context;
}

function useLocalStorageState(initialState, key) {
	const [value, setValue] = useState(function () {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialState;
	});

	useEffect(
		function () {
			localStorage.setItem(key, JSON.stringify(value));
		},
		[value, key]
	);

	return [value, setValue];
}

export { DarkModeProvider, useDarkMode };
