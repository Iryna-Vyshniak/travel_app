export interface IFormValue {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
}

export interface IErrorObj {
    firstname?: string;
    lastname?: string;
    email?: string;
    message?: string;
}

export interface ITag extends React.HTMLAttributes<HTMLSpanElement> {
    tag: string;
    selected?: boolean;
    disabled?: boolean;
}

export interface IPost {
    id: string;
    author: string;
    title: string;
    photo: string;
    date: string;
    post: string;
    tags: string[];
    isFeatured: boolean;
};

export interface ICategories {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export interface ITags {
    tags: string[];
}

type Post = {
    id: string;
    author: string;
    title: string;
    photo: string;
    date: string;
    post: string;
    tags: string[];
    isFeatured: boolean;
};

export default Post;


