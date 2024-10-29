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
    },
    {
        key: "subletinn",
        values: {
            title: 'Subletinn.com',
            description: 'Co-living Management Company',
            images: ["subletinn/1.png", "subletinn/2.png", "subletinn/3.png", "subletinn/4.png", "subletinn/5.png"],
            stack: [
                skills.frontend.Next,
                skills.frontend.React,
                skills.frontend.React_Native,
                skills.databases.PostgreSQL,
                skills.other.OnPrem,
            ]
        }
    }
];

