export const COLORS = ['#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16'];

type CategoryColors = Map<string, [string, string]>;

const categoryColors: CategoryColors = new Map([
    ['Travel', ['bg-pink-200', 'bg-pink-500/80']],
    ['Nature', ['bg-green-200', 'bg-green-500/80']],
    ['Mountain', ['bg-yellow-200', 'bg-yellow-500/80']],
    ['Adventure', ['bg-blue-200', 'bg-blue-500/80']],
    ['Beaches', ['bg-purple-200', 'bg-purple-500/80']],
    ['Landmarks', ['bg-red-200', 'bg-red-500/80']],
    ['Sunset', ['bg-orange-200', 'bg-orange-500/80']],
    ['City', ['bg-indigo-200', 'bg-indigo-500/80']],
]);

export const categories: string[] = Array.from(categoryColors.keys());

export function getCategoryColors(category: string): [string, string] {
    const colorTuple: [string, string] | undefined = categoryColors.get(category);
    return colorTuple ?? ['bg-cyan-200', 'bg-cyan-500/80'];
}