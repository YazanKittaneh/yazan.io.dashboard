import { skills } from "./jobs";



export type Tools = typeof skills;
export type ToolCategory = keyof Tools;
export type ToolName<T extends ToolCategory> = keyof Tools[T];
export type ToolValue = Tools[ToolCategory][keyof Tools[ToolCategory]];


export type DetailedProject = {
    key: String,
    values: {
        title: string,
        description: string,
        images: string[],
        stack: string[];
    }
}

export type Projects = DetailedProject[];



export const projects: Projects = [
    {
        key: "gosu",
        values: {
            title: 'Gosu.Tools',
            description: 'NFT member-only crypto price aggrigator',
            images: ["gosu/1.jpg", "gosu/2.jpg", "gosu/3.jpg"],
            stack: [
                skills.frontend.Next,
                skills.frontend.React,
                skills.frontend.Three,
                skills.databases.Supabase,
                skills.databases.GraphQL,
                skills.databases.Redis
            ]
        }
    }
];

