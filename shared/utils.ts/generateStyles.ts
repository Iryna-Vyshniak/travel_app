export const generateStyles = (height: number, index: number, postsLength: number) => {
    return {
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#f8fafc',
        marginBottom: index !== postsLength - 1 ? 10 : 0,
    };
};