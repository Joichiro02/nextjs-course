"use client";

import { HomePageFilters } from "@/constants/filters";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function HomeFilters() {
	const active = "newest";

	return (
		<div className="mt-10 hidden flex-wrap gap-3 md:flex">
			{HomePageFilters.map((item) => (
				<Button
					key={item.value}
					className={cn(
						"body-medium rounded-lg px-6 py-3 capitalize shadow-none",
						{ "bg-primary-100 text-primary-500": active === item.value },
						{
							"bg-light-800 text-light-500": active !== item.value,
						},
					)}
					onClick={() => {}}
				>
					{item.name}
				</Button>
			))}
		</div>
	);
}
