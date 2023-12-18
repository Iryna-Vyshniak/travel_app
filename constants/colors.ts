export const COLORS = ['#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16'];

type CategoryColors = Map<string, [string, string]>;

const categoryColors: CategoryColors = new Map([
    ['Travel', ['bg-pink-100', 'bg-pink-300/80']],
    ['Nature', ['bg-green-100', 'bg-green-300/80']],
    ['Mountain', ['bg-yellow-100', 'bg-yellow-300/80']],
    ['Adventure', ['bg-blue-100', 'bg-blue-300/80']],
    ['Beaches', ['bg-purple-100', 'bg-purple-300/80']],
    ['Landmarks', ['bg-red-100', 'bg-red-300/80']],
    ['Sunset', ['bg-orange-100', 'bg-orange-300/80']],
    ['City', ['bg-indigo-100', 'bg-indigo-300/80']],
]);

export const categories: string[] = Array.from(categoryColors.keys());

export function getCategoryColors(category: string): [string, string] {
    const colorTuple: [string, string] | undefined = categoryColors.get(category);
    return colorTuple ?? ['bg-cyan-100', 'bg-cyan-500/50'];
}