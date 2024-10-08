import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getTimeStamp(created: Date): string {
	const now = new Date();
	const timeDiff = now.getTime() - created.getTime();

	// Define the time intervals in milliseconds
	const minute = 60 * 1000;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = day * 30;
	const year = day * 365;

	if (timeDiff < minute) {
		const seconds = Math.floor(timeDiff / 1000);
		return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
	} else if (timeDiff < hour) {
		const minutes = Math.floor(timeDiff / minute);
		return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	} else if (timeDiff < day) {
		const hours = Math.floor(timeDiff / hour);
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	} else if (timeDiff < week) {
		const days = Math.floor(timeDiff / day);
		return `${days} day${days > 1 ? "s" : ""} ago`;
	} else if (timeDiff < month) {
		const weeks = Math.floor(timeDiff / week);
		return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
	} else if (timeDiff < year) {
		const months = Math.floor(timeDiff / month);
		return `${months} month${months > 1 ? "s" : ""} ago`;
	} else {
		const years = Math.floor(timeDiff / year);
		return `${years} year${years > 1 ? "s" : ""} ago`;
	}
}

export function formatNumber(num: number): string {
	if (num >= 1000000) {
		const formattedNum = (num / 1000000).toFixed(1);
		return `${formattedNum}M`;
	} else if (num >= 1000) {
		const formattedNum = (num / 1000).toFixed(1);
		return `${formattedNum}K`;
	}
	return num.toString();
}
