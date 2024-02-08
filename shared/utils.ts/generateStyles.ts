export const generateStyles = (index: number, postsLength: number, height: number) => {
    return {
        width: '100%',
        height: height,
        borderRadius: 20,
        backgroundColor: '#f8fafc',
        marginBottom: index !== postsLength - 1 ? 10 : 0,
    };
};